// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

// Project
import { Alert } from './alert.class';
import { AlertService } from "./alert.service";

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit, OnDestroy {
    private alertSubs: Subscription;
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) { }

    ngOnInit() {
      this.alertSubs = this.alertService.alertObservable()
        .subscribe(alert => {
          if(alert) {
            this.alerts.push(alert);
          }
        })
    }

    // prevent memory leak
    ngOnDestroy() {
      this.alertSubs.unsubscribe();
    }
}
