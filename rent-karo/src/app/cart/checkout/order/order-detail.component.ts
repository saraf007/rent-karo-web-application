// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { CartService } from "../../cart.service";
import { OrderDetail } from './order-detail.class';
import { AlertService } from '../../../shared/alert/alert.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
  orderDetails : OrderDetail[];
  orderCount: number = 1;
  isOrderDeleted: boolean = false;
  maxOrderLimitInfoMessage = `You have exceeded the quantity limit for this item. Please contact our customer
  care team directly for bulk/B2B orders.`;
  minOrderLimitWarningMessage = `The minimum quantity limit can not be less than 1.`;

  constructor(private cartService: CartService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.orderDetails = this.cartService.getOrderDetails();
    console.log(this.orderDetails);
  }

  onIncreaseOrderCount() {
    if (this.orderCount < 3) {
      this.orderCount = ++this.orderCount;
    }
    else {
      this.alertService.infoAlert(this.maxOrderLimitInfoMessage, 7000);
    }
  }

  onDecreaseOrderCount() {
    if (this.orderCount > 1) {
      this.orderCount = --this.orderCount;
    } else {
      this.alertService.warningAlert(this.minOrderLimitWarningMessage, 5000);
    }
  }

  onDeleteOrder() {
    this.isOrderDeleted = true;
    this.cartService.clearCart(0);
    this.removeModalFromDom();
    this.alertService.successAlert("You have succesfully deleted item in the cart.");
  }

  private removeModalFromDom() {
    document.getElementById("orderDetail").remove();
    const getModalBackdropElement = document.getElementsByClassName("modal-backdrop")[0];
    getModalBackdropElement.classList.remove("modal-backdrop");
    const getModalOpenElement = document.getElementsByClassName("modal-open")[0];
    getModalOpenElement.removeAttribute("style");
    getModalOpenElement.classList.remove("modal-open");
  }

}

