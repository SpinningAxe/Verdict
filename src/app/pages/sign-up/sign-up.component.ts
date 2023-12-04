import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private Router: Router) { }
  title:string = "register"

  registerToMenuAnimate(){
    let background = document.getElementById('register-background')
    let backButton = document.getElementById('backButton')
    let titleCard = document.getElementById('titleCard')

    background!.classList.add('registerPage-to-menuPage-background')
    backButton!.classList.add('backButton-out')
    titleCard!.classList.add('registerPage-to-menuPage-titleCard')
  }

  registerToVerdictAnimate(){
    let background = document.getElementById('register-background')
    background!.classList.add('registerPage-to-menuPage-background')

    let titleCard = document.getElementById('titleCard')
    let horizonLine = document.getElementById('horizonLine')
    let backButton = document.getElementById('backButton')
    let container = document.getElementById('container')

    container!.classList.add('menuPage-to-verdict-container')
    titleCard!.classList.add('registerPage-to-verdict-titleCard')
    horizonLine!.classList.add('menuPage-to-verdict-horizonLine')
    backButton!.classList.add('register-to-verdict-backButton')
  }
  
  navigateTo(path:string){
    let loadTime:number = 0;

    switch(path){
      case "menu-page": {
        this.registerToMenuAnimate();
        loadTime = 200;
      }

      break;
      case "verdict": {
        this.registerToVerdictAnimate();
        loadTime = 2000;
      }
      break;
    }

    setTimeout(() =>{
      this.Router.navigate([path])
    }, loadTime) 
  }
}
