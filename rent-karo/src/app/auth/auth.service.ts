// Angular
import { Injectable } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RXJS
import { Subject, throwError, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// Project
import { User } from "./user.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  createUserUrl = "https://localhost:5001/api/authentication";
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  /**POST : create a new customer */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.createUserUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse){
    // A client-side or network error occurred. Handle it accordingly.
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    }
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
    'Something bad happened; please try again later.');
  }

  // signup user
  // signup(email: string, password: string) {
  //   return this.http
  //   .post<AuthResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVefEGiG_a_apWxUeZptGoAs0D3aHhH7I',
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true
  //     })
  //   .pipe(catchError(this.handleError), tap(resData => {
  //     this.handleAuthentication(
  //       resData.email,
  //       resData.localId,
  //       resData.idToken,
  //       +resData.expiresIn);
  //   }));
  // }

  // login user
  // login(email: string, password: string) {
  //  return this.http
  //  .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVefEGiG_a_apWxUeZptGoAs0D3aHhH7I',
  //   {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true
  //   })
  //   .pipe(catchError(this.handleError), tap(resData => {
  //     this.handleAuthentication(
  //       resData.email,
  //       resData.localId,
  //       resData.idToken,
  //       +resData.expiresIn);
  //   }));
  // }

  // user authentication
//   private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
//     const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
//       const user = new User(
//         email,
//         userId,
// );
//       this.user.next(user);
//   }
}
