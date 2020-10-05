import { Component, OnInit, OnChanges } from '@angular/core';

import { ICountriesData } from "../shared/countries.interface";
import { CountriesService } from "../services/countries.service";
import { CountryParametersService } from "../services/country-parameters.service";

const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar']
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit{
  regionFilter: string;
  regionOptions = REGION_OPTIONS;

    get listSearch(): string{
      return this.countryParameterService.listSearch;
    }

    set listSearch(value: string){
      this.countryParameterService.listSearch = value;
      this.performSearch(this.listSearch)
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
        // this.performFilter(this.regionFilter);
      },
      (err: any) => console.log(err),
      ()=>console.log('all done getting data')
    );
  }

  performSearch(SearchBy?: string): void {
    if (SearchBy) {
        this.filteredCountry = this.allData.filter((product: ICountriesData) =>
        product.name.toLocaleLowerCase().indexOf(SearchBy.toLocaleLowerCase()) !== -1);
    }else {
      this.filteredCountry = this.allData;
    }
  }

  performFilter(e: string){
    this.filteredCountry = this.allData.filter((count: ICountriesData) =>
    count.region.indexOf(e) !== -1);
  }

  getImgStyles(){
    return {
      'height': '200px',
      'cursor': 'pointer'
    }
  }

}

