import { Injectable } from '@angular/core';
import { Data } from './data';
import { ApiResponse } from './api-response';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint = 'http://localhost:8080/rest/entity';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  search(query: string): Observable<Data[]> {
    const params = { query };
    return this.http.get<ApiResponse<Data[]>>(this.endpoint, { params: params }).pipe(
      map((response: ApiResponse<Data[]>) => { return response.content.content }),
      catchError(this.handleError<Data[]>('getData', []))
    ).pipe(
      catchError(this.handleError<Data[]>('getData', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
