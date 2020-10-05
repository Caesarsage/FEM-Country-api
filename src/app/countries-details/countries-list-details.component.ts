import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from '../services/countries.service';

import { ICountriesData } from "../shared/countries.interface";

@Component({
  selector: 'app-countries-list-details',
  templateUrl: './countries-list-details.component.html',
  styleUrls: ['./countries-list-details.component.css']
})
export class CountriesListDetailsComponent implements OnInit {
  pageTitle = 'Country Detail';
  selectedData: ICountriesData;

  constructor(private countryService: CountriesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let dataName = this.route.snapshot.paramMap.get('name');
    this.getCountry(dataName);
  }

  getCountry(dataName: string){
    this.countryService.getDataByName(dataName)
    .subscribe(
      (country:ICountriesData) => this.selectedData = country,
      (err: any) => console.log(err)
    )
  }

  goBack():void{
    this.router.navigate(['/country'])
  }

  detailStyles(){
    return {
      'font-size': '16px',
      'line-height':'1',
      'padding-top':'60px',
      'padding-bottom': '50px',
      'color': 'hsl(200, 15%, 8%)'
    }
  }

  borderStyle(){
    return {
      'border-radius':'10px',
      'padding': '8px',
      'margin': '0 5px',
      'box-shadow': '1px 1px 1.5px black',
      'cursor':'pointer'
    }
  }
}
