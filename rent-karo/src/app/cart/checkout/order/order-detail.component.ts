// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { CartService } from "../../cart.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
  orderDetails : any[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.orderDetails = this.cartService.getOrderDetails();
    console.log(this.orderDetails);
  }

}
