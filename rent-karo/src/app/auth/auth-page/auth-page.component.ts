// Angular
import { Component, OnInit } from '@angular/core';

// Social Media Login
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  isLoginModeSignup = false;
  socialUser: SocialUser = new SocialUser;

  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user;
      console.log(this.socialUser);
    });
  }

  switchModeToLogin() {
    this.isLoginModeSignup = false;
  }

  switchModeToSignup() {
    this.isLoginModeSignup = true;
  }

  // login with google
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
