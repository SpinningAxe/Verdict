import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  constructor(private route: Router) { }

  title="about-page"

  async navigateTo(pageDes:string){

    let titleCard = document.getElementById("titleCard")
    let creator = document.getElementById("creator")
    let backButton = document.getElementById('backButton')

    backButton!.classList.add('backButton-out')
    titleCard!.classList.add("aboutPage-to-menuPage-titleCard")
    creator!.classList.add("aboutPage-to-menuPage-creator")

    setTimeout(() =>{
      this.route.navigate([pageDes])
    }, 400) 
  }
}