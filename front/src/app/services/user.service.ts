import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
 })

export class UserService {
   constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getUsers(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'user')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveUser(user:User): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'user',user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateUser(user:User): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'user/'+user.id,[user])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteUser(id:number): Observable<User> {
    return this.http.get<User>(environment.apiUrl+'user/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
   }



  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
