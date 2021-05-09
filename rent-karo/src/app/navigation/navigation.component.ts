// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { ProductService } from "../products/product.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  cities = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Chennai" }
  ]
  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts(cityId: number) {
    this.productService.getProducts(cityId);
  }
}
