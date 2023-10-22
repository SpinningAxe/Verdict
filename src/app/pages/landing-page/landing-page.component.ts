import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private route: Router) { }

  gotomenu(){
    
    this.route.navigate(['menu-page'])
  }

  async navigateTo(){
    let element = document.getElementById("title");
    element!.classList.remove("appear-animation");
    element!.classList.add("diaspear-animation");
    
    let elementSub = document.getElementById("subtitle_box");
    elementSub!.classList.add("lower-animation");

    setTimeout(() =>{
      this.route.navigate(['menu-page'])
    }, 500) 
  }
}
