// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  // create a subject
  itemCount = new BehaviorSubject<number>(0);

  // create a stream of the subject
  itemCount$ = this.itemCount.asObservable();

  constructor(private http: HttpClient) { }


  addToCart(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrice() {
    return this.http.get<{type: string, price: number}[]>('./assets/shipping.json');
  }

  // emit subject for other component to consume
  cartItemCount(item: number) {
    this.itemCount.next(item);
  }
}
