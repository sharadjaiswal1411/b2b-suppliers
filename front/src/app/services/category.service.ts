import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Category} from '../models/category';

@Injectable({
    providedIn: 'root'
 })

export class CategoryService {
   constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getCategorys(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'Category')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveCategory(category:Category): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'category',category)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateCategory(category:Category): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'category/'+category.id,[category])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteCategory(id:number): Observable<Category> {
    return this.http.get<Category>(environment.apiUrl+'category/'+id)
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
