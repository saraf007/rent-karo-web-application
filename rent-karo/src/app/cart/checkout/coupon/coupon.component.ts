// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { AlertService } from '../../../shared/alert/alert.service';

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

  // apply coupon
  onApplyCoupon(couponName: string, couponValue: number) {
    this.couponName = couponName;
  }

  // check coupon validity
  onCheckCouponValidity(couponName: string) {
    if (couponName !== null && couponName !== undefined) {
      if (this.coupons.some(x => x.name.toLowerCase() === couponName.toLowerCase())) {
        this.alertService.successAlert(`${couponName} code applied succesfully.`);
      }
      else {
        this.alertService.errorAlert(`Failed to apply ${couponName} coupon code.`);
      }
    }
  }
}
