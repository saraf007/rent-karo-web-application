// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl = "https://rentify-41b00-default-rtdb.firebaseio.com/";
  orderDetails = [];

  // create a subject
  itemCount = new BehaviorSubject<number>(0);

  // create a stream of the subject
  itemCount$ = this.itemCount.asObservable();

  constructor(private http: HttpClient) { }

  countItems(item) {
    this.itemCount.next(item);
  }

  addToCart(item) {
    this.orderDetails.push(item);
  }

  getOrderDetails() {
    return this.orderDetails;
  }

  clearCart() {
    this.orderDetails = [];
    return this.orderDetails;
  }

  getShippingPrice() {
    return this.http.get<{type: string, price: number}[]>('./assets/shipping.json');
  }

  // emit subject for other component to consume
  cartItemCount(item: number) {
    this.itemCount.next(item);
  }

  // POST method for creating purchase data
  onPurchase(purchaseData: { name: string, address: string }) {
    console.log(purchaseData);
    const onPurchaseUrl = `${this.baseUrl}/posts.json`;
    return this.http.post(onPurchaseUrl, purchaseData);
  }

  getDetails() {
    return this.http.get(`${this.baseUrl}/posts.json`);
  }
}
