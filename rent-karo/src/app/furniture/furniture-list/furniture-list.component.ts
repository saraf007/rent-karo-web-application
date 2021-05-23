import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent implements OnInit {
furnitureItems;

  constructor(private furnitureService: FurnitureService) {
   }

  ngOnInit(): void {
  this.furnitureItems = this.furnitureService.getFurniture();
    console.log(this.furnitureItems);
  }

}
