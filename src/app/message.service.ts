import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MessageService {

  constructor(public snackBar: MatSnackBar) { }

  snackBarOpen(message: string, action: string = "OK", seconds: number = 10) {
    this.snackBar.open(message, action, { duration: seconds * 1000, });
  }
}
