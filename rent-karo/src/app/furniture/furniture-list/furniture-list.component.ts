// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Project
import { Furniture } from '../furniture.model';
import { CartService } from '../../cart/cart.service';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent implements OnInit {
  itemCount = 0;
  furnitures: Furniture[];
  furnitureList;

  constructor(private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getFurnitureListDetailFromFurnitureService();
  }

  displayFurnitureListBasedOnId() {
    // get furniture id from route
    const routeParams = this.route.snapshot.paramMap;
    const furnitureIdFromRoute = Number(routeParams.get('furnitureId'));

    // check if furniture id from route & furniture id from json data match
    this.furnitureList = this.furnitures.find(f => f.id === furnitureIdFromRoute);
  }

  getFurnitureListDetailFromFurnitureService() {
    this.furnitureService.getFurniture().subscribe(
      (data: any) =>
          {
            this.furnitures = data;
            console.log(this.furnitures);
            this.displayFurnitureListBasedOnId();
           });
  }

  onAddToCart(furnitureDetail: any) {
    this.itemCount = this.itemCount + 1;
    this.cartService.countItems(this.itemCount);
    this.cartService.addToCart(furnitureDetail);
  }

}
