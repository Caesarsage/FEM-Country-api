import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from "../services/theme.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title:string = 'Where in the world?'
  theme: Observable<Theme>

  constructor(private themeService: ThemeService) { }

  ngOnInit(){
    this.theme = this.themeService.modes;
  }

  toggleTheme(){
    this.themeService.toggleMode();
  }
}
