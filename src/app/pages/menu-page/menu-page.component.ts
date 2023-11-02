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

  openModal(){
    let modal = document.getElementById('checkbox');
    let right_conttent = document.getElementById('right-content');
    let horizonLine = document.getElementById('horizonLine');
    
    right_conttent!.classList.remove("remove-blur-content")
    right_conttent!.classList.add("blur-content")
    
    horizonLine!.classList.remove("remove-blur-content")
    horizonLine!.classList.add("blur-content")

    modal!.style.display = 'flex';
  }

  closeModal(){
    let modal = document.getElementById('checkbox');
    let right_conttent = document.getElementById('right-content');
    let horizonLine = document.getElementById('horizonLine');

    right_conttent!.classList.remove("blur-content")
    right_conttent!.classList.add("remove-blur-content")

    horizonLine!.classList.remove("blur-content")
    horizonLine!.classList.add("remove-blur-content")
    
    modal!.style.display = 'none';
  }

  navigateToVerdict(){
    setTimeout(() =>{
      // this.Router.navigate(['verdict'])
    }, 200) 

  }

  // hoverEffect(button:string){
  //   let buttonHover = document.getElementById(`${button}`);
  //   buttonHover!.classList.remove(`${button}-appear-animation`)
  // }
}
