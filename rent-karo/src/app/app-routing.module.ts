// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project
import { CartComponent } from './cart/cart.component';
import { PackageComponent } from "./package/package.component";
import { ShippingComponent } from './shipping/shipping.component';
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { FurnitureComponent } from './furniture/furniture.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { FurnitureListComponent } from './furniture/furniture-list/furniture-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'appliance', component: ApplianceComponent },
  { path: 'package', component: PackageComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'electronic', component: ElectronicComponent },
  { path: 'furniture-list', component: FurnitureListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
