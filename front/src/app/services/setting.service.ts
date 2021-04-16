import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Setting} from '../models/setting';

@Injectable({
    providedIn: 'root'
 })

export class SettingService {
   constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   getSettings(): Observable<any> {
    return this.http.get<any>(environment.apiUrl+ 'setting ')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }

   saveSetting(setting:Setting): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'setting',setting)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  updateSetting(setting:Setting): Observable<any> {
    return this.http.put<any>(environment.apiUrl+'setting/'+setting.id,[setting])
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

   deleteSetting(id:number): Observable<Setting> {
    return this.http.get<Setting>(environment.apiUrl+'setting/'+id)
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
