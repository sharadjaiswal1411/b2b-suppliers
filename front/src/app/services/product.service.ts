import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Product} from '../models/product';

@Injectable({
    providedIn: 'root'
 })

export class ProductService {
   constructor(private http:HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getProducts(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'product')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveProduct(product:Product): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'product',product)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateProduct(product:Product): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'product/'+product.id,[product])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteProduct(id:number): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl+'product/'+id)
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
