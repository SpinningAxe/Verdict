import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private route: Router) { }

  async navigateTo(){
    let title = document.getElementById("title");
    title!.classList.remove("appear-animate", "animate-speed-1001", "slow-animate-dur");
    title!.classList.add("fade-out-animate", "animate-speed-0001", "fast-animate-dur");

    let subtitle = document.getElementById("subtitle_box");
    subtitle!.classList.remove("fade-in-animate", "animate-speed-1001","delay-after-horizon", "slow-animate-dur");
    subtitle!.classList.add("lower-animate", "animate-speed-0001", "fast-animate-dur");

    setTimeout(() =>{
      this.route.navigate(['menu-page'])
    }, 500) 
  }
}
