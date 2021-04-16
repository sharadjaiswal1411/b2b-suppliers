import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Brand} from '../models/brand';

@Injectable({
    providedIn: 'root'
 })

export class BrandService {
   constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getBrands(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'brand')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveBrand(brand:Brand): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'brand',brand)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateBrand(brand:Brand): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'brand/'+brand.id,[brand])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteBrand(id:number): Observable<Brand> {
    return this.http.get<Brand>(environment.apiUrl+'brand/'+id)
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
