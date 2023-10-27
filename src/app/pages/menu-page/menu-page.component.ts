import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent { 
  constructor(private Router: Router) { }

  navigateToLogin(){
    this.Router.navigate(['log-in'])
  }

  navigateToSignUp(){
    this.Router.navigate(['sign-up'])
  }

  navigateToVerdict(){
    this.Router.navigate(['verdict'])
  }
}
