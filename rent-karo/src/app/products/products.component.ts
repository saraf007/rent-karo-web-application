// Angular
import { Component, Input, OnInit } from '@angular/core';

// Project
import { PRODUCTS } from "./mock-products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[];
  @Input() cityId: number;

  constructor() { }

  ngOnInit(): void {
    this.populateProductBasedOnCity();
  }

  populateProductBasedOnCity() {
    if (this.cityId === 1) {
     return this.products = [ { id: 1, name: "AC"} ]
    }
    else {
      return this.products;
    }
  }
}
