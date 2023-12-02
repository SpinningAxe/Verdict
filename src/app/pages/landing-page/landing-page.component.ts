import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private route: Router) { }

  title="landing-page"

  landingPageToMenuPageAnimate(){
    let titleCard = document.getElementById("titleCard")
    let container = document.getElementById("container")
    let placardBox = document.getElementById("placardBox")
    placardBox!.classList.add("placardBox-fadeout")
    titleCard!.classList.add("landingPage-to-menuPage-titleCard")
    container!.classList.add("landingPage-to-menuPage-container")
  }

  async navigateTo(pageDes:string){
    switch(pageDes){
      case "menu-page":{
        this.landingPageToMenuPageAnimate()
      }
    }
    setTimeout(() =>{
      this.route.navigate([pageDes])
    }, 500) 
  }
}


    // let title = document.getElementById("title");
    // title!.classList.remove("appear-animate", "animate-speed-1001", "slow-animate-dur");
    // title!.classList.add("fade-out-animate", "animate-speed-0001", "fast-animate-dur");

    // let subtitle = document.getElementById("subtitle_box");
    // subtitle!.classList.remove("fade-in-animate", "animate-speed-1001","delay-after-horizon", "slow-animate-dur");
    // subtitle!.classList.add("lower-animate", "animate-speed-0001", "fast-animate-dur");