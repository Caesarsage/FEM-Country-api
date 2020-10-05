import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <div class="container-fluid">
            <app-navbar></app-navbar>
            <router-outlet></router-outlet>
          </div>
        `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Where in the world?';
}
