import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {
MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatProgressBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessageService } from './message.service';
@NgModule({
  imports: [
BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule,

MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatProgressBarModule
  ],
  declarations: [ AppComponent ],
  providers: [ApiService, MessageService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
