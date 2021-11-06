// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RXJSa
import { Subscription } from 'rxjs';

// Social Media Login
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

// Project
import { CartService } from '../cart/cart.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  socialUser: SocialUser = new SocialUser;
  private userSub: Subscription;
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

  constructor(private cartService: CartService, private authService: AuthService,
    private socialAuthService: SocialAuthService) {
    // subscribe to item count stream
    this.subscription = cartService.itemCount$.subscribe(count => { this.itemCount = count });
  }

  ngOnInit(): void {
      this.socialAuthService.authState.subscribe(user => {
        this.socialUser = user;
        if (this.socialUser != null || this.socialUser != undefined) {
          this.isAuthenticated = true;
          this.removeModalAfterLogin();
        }
      })
  }

  setCityId(cityId: number) {
    this.cityId = cityId;
  }

  private removeModalAfterLogin() {
    const removeModalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
    removeModalBackdrop.classList.remove("modal-backdrop");
    const removeModalBackdrop1 = document.getElementsByClassName("modal-open")[0];
    removeModalBackdrop1.removeAttribute("style");
    removeModalBackdrop1.classList.remove("modal-open");
  }

  // prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
  }
  
  // logout with google
  logoutWithGoogle(): void {
    this.socialAuthService.signOut();
  }

}
