import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private Router: Router) { }
  title:string = "log-in"

  loginToMenuAnimate(){
    let background = document.getElementById('login-background')
    let backButton = document.getElementById('backButton')
    background!.classList.add('loginPage-to-menuPage-background')
    backButton!.classList.add('backButton-out')
  }

  loginToVerdictAnimate(){
    let background = document.getElementById('login-background')
    background!.classList.add('loginPage-to-menuPage-background')

    let titleCard = document.getElementById('titleCard')
    let horizonLine = document.getElementById('horizonLine')
    let backButton = document.getElementById('backButton')
    let container = document.getElementById('container')

    container!.classList.add('menuPage-to-verdict-container')
    titleCard!.classList.add('menuPage-to-verdict-titleCard')
    horizonLine!.classList.add('menuPage-to-verdict-horizonLine')
    backButton!.classList.add('backButton-out')
  }
  
  navigateTo(path:string){
    let loadTime:number = 0;

    switch(path){
      case "menu-page": {
        this.loginToMenuAnimate();
        loadTime = 200;
      }

      break;
      case "verdict": {
        this.loginToVerdictAnimate();
        loadTime = 2000;
      }
      break;
    }

    setTimeout(() =>{
      this.Router.navigate([path])
    }, loadTime) 
  }

  tickCheckbox(){
    let checkmark = document.getElementById("checkmark")
    let rememberMeCheckbox = document.getElementById("rememberMeCheckbox")
    rememberMeCheckbox!.classList.toggle('checkbox-tick')
    checkmark!.classList.toggle("checkmark-ticked")
  }
}