import { Component, OnInit, OnChanges } from '@angular/core';

import { ICountriesData } from "../shared/countries.interface";
import { CountriesService } from "../services/countries.service";
import { CountryParametersService } from "../services/country-parameters.service";
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit{
  showOptions: Boolean = false;

  // search by country getter and setter : persist change
  get listSearch(): string{
    return this.countryParameterService.listSearch;
  }
  set listSearch(value: string){
    this.countryParameterService.listSearch = value;
    this.performSearch(this.listSearch)
  }

  // filter by region getter and setter : persist change
  get regionFilter(): string{
    return this.countryParameterService.regionFilter;
  }
  set regionFilter(value: string){
    this.countryParameterService.regionFilter = value;
  }

  filteredCountry : ICountriesData[] ;
  allData: ICountriesData[];

  constructor(private countryService: CountriesService,
              private countryParameterService: CountryParametersService) { }

  ngOnInit(): void {
    this.countryService.getData()
    .subscribe(
      (countries) => {
        this.allData = countries,
        this.performSearch(this.listSearch);
      },
      (err: any) => console.log(err),
      ()=>console.log('all done getting data')
    );
  }

  performSearch(SearchBy?: string): void {
    if (SearchBy) {
        this.filteredCountry = this.allData.filter((country: ICountriesData) =>
        country.name.toLocaleLowerCase().indexOf(SearchBy.toLocaleLowerCase()) !== -1);
    }else {
      this.filteredCountry = this.allData;
    }
  }

  performFilter(e?): void{
    if (e) {
      this.filteredCountry = this.allData.filter((count: ICountriesData) =>
      count.region.toLocaleLowerCase().indexOf(e.toLocaleLowerCase()) !== -1);
    }
  }

  toggleOption(){
    this.showOptions = !this.showOptions;
  }

  getImgStyles(){
    return {
      'height': '200px',
      'cursor': 'pointer'
    }
  }

}

