// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
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

  isCouponApplied = false;

  constructor() { }

  ngOnInit() {
    console.log(this.coupons);
  }
}
