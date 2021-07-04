// Angular
import { Injectable } from '@angular/core';

// RXJS
import { Observable, Subject } from 'rxjs';

// Project
import { Alert, AlertType } from "./alert.class";

@Injectable({providedIn: 'root'})
export class AlertService {
  private alertSubject = new Subject<Alert>();

  constructor() { }

  infoAlert(message: string, timeout = 3000) {
    this.alertSubject.next(new Alert(AlertType.info, message, timeout));
  }

  successAlert(message: string, timeout = 3000) {
    this.alertSubject.next(new Alert(AlertType.success, message, timeout));
  }

  warningAlert(message: string, timeout = 3000) {
    this.alertSubject.next(new Alert(AlertType.warning, message, timeout));
  }

  errorAlert(message: string, timeout = 3000) {
    this.alertSubject.next(new Alert(AlertType.error, message, timeout));
  }

  alertObservable(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }

}
