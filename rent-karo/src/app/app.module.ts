// Angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

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
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '472303531547-fa1sabknqt67m2klp83l4umfgnc9h19k.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
