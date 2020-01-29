import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  readonly API_LIST = 'https://dog.ceo/api/breeds/list/all';
  readonly API_DETAIL = 'https://dog.ceo/api/breed/';

  constructor( private http: HttpClient ) { }

  dogs$ = this.http.get<any>(this.API_LIST).pipe(
    map( res => {
      return res;
    }),
    catchError( error => {
      console.log(error);
      return error;
    })
  )

  detail(dogName) {
    return this.http.get<any>(this.API_DETAIL + dogName + '/images/random').pipe(
      map( res => {
        return res;
      }),
      catchError( error => {
        console.log(error);
        return error;
      })
    )
  }
}
