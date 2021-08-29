// Angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Project
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { ShippingComponent } from './shipping/shipping.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { FurnitureListComponent } from './furniture/furniture-list/furniture-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { CheckoutComponent } from "./cart/checkout/checkout.component";
import { CouponComponent } from "./cart/checkout/coupon/coupon.component";
import { AlertComponent } from "./shared/alert/alert.component";
import { OrderDetailComponent } from "./cart/checkout/order/order-detail.component";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent,
    FurnitureComponent,
    ApplianceComponent,
    ElectronicComponent,
    FurnitureListComponent,
    FooterComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    CheckoutComponent,
    CouponComponent,
    AlertComponent,
    OrderDetailComponent,
    SignUpComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
