import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title:string = 'Where in the world?'
  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMode():void{
    this.toggle = true
  }

}
