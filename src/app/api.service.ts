import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../environments/environment';

import { MessageService } from './message.service'
export class Settings {
  area_1_enabled: boolean;
  area_1_name: string;
  area_1_pin: number;
  area_2_enabled: boolean;
  area_2_name: string;
  area_2_pin: number;
  temperature: number;
  temperature_interval_seconds: number;
  temperature_margin: number;
  temperature_pin: number;
}
@Injectable()
export class ApiService {
  public dateFormat: string = "yyyy-MM-dd";
  public timeFormat: string = "HH:mm:ss";
  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
  getSettings(): Observable<Settings> {
    return this.httpClient.get<Settings>(environment.api + "settings")
      .catch(x => this.handleError(x, "Uitlezen instellingen mislukt"))
  }
  setSettings(settings: Settings): Observable<Settings> {
    return this.httpClient.post<Settings>(environment.api + "settings", settings)
      .catch(x => this.handleError(x, "Opslaan instellingen mislukt"))
  }
  getStatus(): Observable<any> {
    return this.httpClient.get<any>(environment.api + "status")
      .catch(x => this.handleError(x, "Uitlezen sensors mislukt"))
  }
  private handleError(error: HttpErrorResponse | any, message: string = 'Data laden mislukt') {
    if (error.status == 0) { this.messageService.snackBarOpen("API server niet beschikbaar"); }
    else { this.messageService.snackBarOpen(message + " (" + error.status + ")"); }
    return Observable.throw(error);
  }
}
