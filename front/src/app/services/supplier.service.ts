import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Supplier} from '../models/supplier';

@Injectable({
    providedIn: 'root'
 })

export class SupplierService {
   constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getSuppliers(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'supplier')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveSupplier(supplier:Supplier): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'supplier',supplier)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateSupplier(supplier:Supplier): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'supplier/'+supplier.id,[supplier])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteSupplier(id:number): Observable<Supplier> {
    return this.http.get<Supplier>(environment.apiUrl+'supplier/'+id)
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
