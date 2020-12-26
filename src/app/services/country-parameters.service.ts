import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryParametersService {
  listSearch: string;
  regionFilter: string;

  constructor() { }
}
