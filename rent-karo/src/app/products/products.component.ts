// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { ProductService } from "./product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getCityId() {
    this.products = this.productService.sendProducts();
  }
}
