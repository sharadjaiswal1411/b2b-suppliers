import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Metric} from '../models/metric';

@Injectable({
    providedIn: 'root'
 })

export class MetricService {
   constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getMetrics(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'metric')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveMetric(metric:Metric): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'metric',metric)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateMetric(metric:Metric): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'metric/'+metric.id,[metric])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteMetric(id:number): Observable<Metric> {
    return this.http.get<Metric>(environment.apiUrl+'metric/'+id)
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
