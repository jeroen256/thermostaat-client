import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from "lodash";
import * as api from './api.service'
import { MessageService } from './message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public apiService: api.ApiService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getSettings(false, true);
  }
  title = 'app';
  mode = new FormControl('over');
  settings: api.Settings = null
  status: any = null
  new: api.Settings = null
  timer = null
  percentage = 0
  getSettings(inform: boolean = false, startup = false): void {
    this.apiService.getSettings().subscribe(
      x => {
        this.settings = x;
        this.new = Object.assign({}, x);
        if(inform) this.messageService.snackBarOpen("Instellingen zijn opniew opgehaald", "OK", 3);
        if(startup) this.getStatus(10) // status needs settings, so call it when thay are available
      })
  }
  paused = false
  getStatus(step: number): void {
    if(this.timer) clearTimeout(this.timer)
    this.percentage = step * 25
    if(step >= 5) {
      this.apiService.getStatus().subscribe( x => { this.status = x; this.getStatus(0) })
    }
    else if (this.paused) this.percentage = 0
    else {
      this.timer = setTimeout(
        ()=>{this.getStatus(step+1)},
        this.settings.temperature_interval_seconds * 1000 / 5
      )
    }
  }
  refresh(): void {
    this.getSettings(true);
    this.getStatus(10);
  }
  saving = false;
  saveEnabled(): boolean { if (_.isEqual(this.new, this.settings) || this.saving) return false; else return true; }
  save(inform: boolean = true, alsoRefreshStatus = false) {
    this.saving = true
    this.apiService.setSettings(this.new).subscribe(
      x => {
        this.saving = false
        this.settings = x;
        this.new = Object.assign({}, x);
        if (inform) this.messageService.snackBarOpen("Instellingen zijn opgeslagen");
        if (alsoRefreshStatus) this.getStatus(10);
      }, error => this.saving = false
    );
  }
  quick(change: number) {
    if(this.new) this.new.temperature += change
    this.save(false, true)
  }
  togglePaused() {
    if (this.paused) {
      this.paused = false
      this.getStatus(10);
    }
    else this.paused = true
  }
  test(): void { this.messageService.snackBarOpen("Test"); }
}
