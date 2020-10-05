import { Routes } from '@angular/router';
import { CountriesListDetailsComponent } from "./countries-details/countries-list-details.component";
import { CountriesListComponent } from "./countries-list/countries-list.component";

export const routes:Routes = [
  {path: 'country', component: CountriesListComponent},
  {path: 'country/:name', component: CountriesListDetailsComponent},
  {path: '', redirectTo: 'country', pathMatch: 'full'}
]