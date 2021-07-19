// Angular
import { FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Project
import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  isCartEmpty = false;
  items = [];
  subs: Subscription;

  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) {
     this.subs = this.cartService.itemCount$.subscribe(item => {
        this.items.push(item);
        if (item) {
          this.isCartEmpty = false;
        }
        else {
          this.isCartEmpty = true;
        }
      })
     }

  ngOnInit(): void {
  }

  // on purchase of orders
  onSubmit(): void {
    this.cartService.onPurchase(this.checkOutForm.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  getDetails() {
    this.cartService.getDetails().subscribe(data => {
      console.log(data);
    })
  }

  // unsubscribe to prevent memory leak
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
