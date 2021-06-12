// Angular
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

// RXJS
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // signup user
  signup(email: string, password: string) {
    return this.http.
    post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVefEGiG_a_apWxUeZptGoAs0D3aHhH7I',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMessage = "An unknown error occured.";
      if(!errorRes.error.error || !errorRes.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = "The email address is already in use by another account.";
        case 'OPERATION_NOT_ALLOWED':
          errorMessage = "Password sign-in is disabled for this project.";
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later.";
      }
     return throwError(errorMessage);
    }));
  }
}
