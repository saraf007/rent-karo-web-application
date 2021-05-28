// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Project
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  items = [];
  itemCount: number;
  cities = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Chennai" }
  ]
  cityId: number;

  constructor(private cartService: CartService) {
    // subscribe to item count stream
    this.subscription = cartService.itemCount$.subscribe(count => { this.itemCount = count });
  }

  ngOnInit(): void {
  }

  setCityId(cityId: number) {
    this.cityId = cityId;
  }

  // prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
