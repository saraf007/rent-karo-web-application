// Angular
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// Project
import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted.', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
