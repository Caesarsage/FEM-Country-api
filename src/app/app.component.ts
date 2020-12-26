import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from "./services/theme.service";

@Component({
  selector: 'app-root',
  template: `
          <div [ngClass]="theme | async" class="container-fluid app">
            <app-navbar></app-navbar>
            <router-outlet></router-outlet>
          </div>
        `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>
  title = 'Where in the world?';

  constructor(private themeService: ThemeService){}

  ngOnInit(){
    this.theme = this.themeService.modes;
  }


}
