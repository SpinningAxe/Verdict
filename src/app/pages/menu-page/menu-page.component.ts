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
    setTimeout(() =>{
      this.Router.navigate(['log-in'])
    }, 200) 
    
  }

  navigateToSignUp(){
    setTimeout(() =>{
      this.Router.navigate(['sign-up'])
    }, 200) 
  }

  navigateToVerdict(){
    setTimeout(() =>{
      this.Router.navigate(['verdict'])
    }, 200) 

  }

  hoverEffect(button:string){
    let buttonHover = document.getElementById(`${button}`);
    buttonHover!.classList.remove(`${button}-appear-animation`)
  }
}
