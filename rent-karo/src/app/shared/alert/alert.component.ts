// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

// Project
import { Alert, AlertType } from './alert.class';
import { AlertService } from "./alert.service";

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit, OnDestroy {
    private alertSubs: Subscription;
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) {
      this.alertSubs = this.alertService.alertObservable()
        .subscribe(alert => {
          if(alert) {
            console.log(alert);
            this.alerts.push(alert);
              setTimeout(() => {
                this.clearAlert(alert.type);
                  }, alert.timeout);
          }
        })
     }

    ngOnInit() {
    }

    // clear alert message from DOM
    private clearAlert(alertType: any) {
      if (alertType !== AlertType.error) {
        this.alerts = [];
      }
    }

    // prevent memory leak
    ngOnDestroy() {
      this.alertSubs.unsubscribe();
    }
}
