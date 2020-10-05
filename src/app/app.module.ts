import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesListDetailsComponent } from './countries-details/countries-list-details.component';
import { NavbarComponent } from './nav/navbar.component';
import { CustomPipe } from "./shared/customPipe.pipe";

import { routes } from "./routes";
import { FormsModule } from '@angular/forms';
import { CountriesService } from './services/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountriesListDetailsComponent,
    NavbarComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountriesService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
