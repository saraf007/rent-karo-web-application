// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  furnitureItems = [];

  constructor(private http: HttpClient) { }

  getFurnitureDetails() {
    console.log(this.furnitureItems);
    return this.furnitureItems;
  }

  getFurniture() {
    const abc = this.http.get<{name: string, price: number}[]>('./assets/furniture.json');
    console.log(abc);
    return abc;
  }
}
