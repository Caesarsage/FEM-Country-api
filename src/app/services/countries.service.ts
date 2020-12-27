import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { ICountriesData} from "../shared/countries.interface";


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = 'https://restcountries.eu/rest/v2/all'
  constructor(private http:HttpClient) { }

  getData():Observable<ICountriesData[]>{
    console.log('Getting all country');
    return this.http.get<ICountriesData[]>(this.url)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getDataByName(name:string):Observable<ICountriesData | undefined>{
    // console.log('getting details by name');
    return this.getData()
      .pipe(
        map((data: ICountriesData[]) => data.find(d => d.name === name))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
