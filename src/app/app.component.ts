import { Component } from '@angular/core';

@Component({                                          
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-band'>{{pageTitle}}</a>
  <ul class='nav navbar-nav'>
    <li><a class="nav-link" [routerLink]='["/welcome"]'> Home        </a></li>  
    <li><a class="nav-link" [routerLink]='["/products"]'> Product List</a></li>
    </ul>
  </nav>
  <router-outlet>  </router-outlet>
  `  ,
  //template: `<pm-products></pm-products> ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'Acme Product Managment';
}
