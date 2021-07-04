// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { AlertService } from '../../shared/alert/alert.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  coupons = [
    {
      name: "WFH50",
      value: 50
    },
    {
      name: "NEW20",
      value: 20
    }
  ];
  couponName : string = "";

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  onApplyCoupon(couponName: string, couponValue: number) {
    this.couponName = couponName;
  }

  onCheckCouponValidity(couponName: string) {
    if (couponName !== null && couponName !== undefined) {
      if (this.coupons.some(x => x.name.toLowerCase() === couponName.toLowerCase())) {
        console.log("correct");
        this.alertService.successAlert("Coupon applied succesfully.")
      }
      else {
        console.log("wrong");
      }
    }
  }
}
