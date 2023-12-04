import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent {
  constructor(private route: Router) {}

  ngOnInit() {
    let loginButton = document.getElementById('login-button');

    setTimeout(() => {
      loginButton!.classList.add('button-hover');
    }, 100);
    setTimeout(() => {
      this.buttonBoxFlag = true;
    }, 300);
  }
  buttonBoxFlag = false;
  title = 'menu-page';

  changeHover(buttonHover: string) {
    if (this.buttonBoxFlag) {
      let button = document.getElementById(buttonHover);
      button!.classList.add('button-hover');

      const allOptions = document.querySelectorAll('.button');

      allOptions.forEach((option) => {
        if (option.id != buttonHover) {
          option.classList.remove('button-hover');
        }
      });
    }
  }

  menuToLoginAnimate() {
    let buttonBox = document.getElementById('button-box');
    let buttonBackground = document.getElementById('button-background');

    buttonBox!.classList.add('menuPage-to-loginPage-buttonBox');
    buttonBackground!.classList.add('menuPage-to-loginPage-buttonBackground');
  }

  menuToRegisterAnimate() {
    let buttonBox = document.getElementById('button-box');
    let buttonBackground = document.getElementById('button-background');
    let titleCard = document.getElementById('titleCard');

    buttonBox!.classList.add('menuPage-to-registerPage-buttonBox');
    buttonBackground!.classList.add(
      'menuPage-to-registerPage-buttonBackground'
    );
    titleCard!.classList.add('menuPage-to-registerPage-titleCard');
  }

  menuToVerdictAnimate() {
    let buttonBox = document.getElementById('button-box');
    let buttonBackground = document.getElementById('button-background');

    buttonBox!.classList.add('menuPage-to-verdictPage-buttonBox');
    buttonBackground!.classList.add('menuPage-to-verdictPage-buttonBackground');

    let titleCard = document.getElementById('titleCard')
    let horizonLine = document.getElementById('horizonLine')
    let container = document.getElementById('container')

    container!.classList.add('menuPage-to-verdict-container')
    titleCard!.classList.add('menuPage-to-verdict-titleCard')
    horizonLine!.classList.add('menuPage-to-verdict-horizonLine')
  }

  menuToAboutAnimate() {
    let titleCard = document.getElementById('titleCard');
    // let creator = document.getElementById("creator")
    let buttonBox = document.getElementById('button-box');
    let buttonBackground = document.getElementById('button-background');

    // creator!.classList.add('menuPage-to-aboutPage-creator')
    titleCard!.classList.add('menuPage-to-aboutPage-titleCard');
    buttonBox!.classList.add('menuPage-to-aboutPage-buttonBox');
    buttonBackground!.classList.add('menuPage-to-aboutPage-buttonBackground');
  }

  openModal() {
    let modal = document.getElementById('modal');
    let menuPage = document.getElementById('menuPageContainer');

    menuPage!.classList.toggle('blur-content');
    modal!.style.display = 'flex';
  }

  closeModal() {
    let modal = document.getElementById('modal');
    let menuPage = document.getElementById('menuPageContainer');

    menuPage!.classList.toggle('blur-content');
    modal!.style.display = 'none';
  }

  async navigateTo(pageDes: string) {
    if (this.buttonBoxFlag) {
      switch (pageDes) {
        case 'log-in':
          this.menuToLoginAnimate();
          break;

        case 'register':
          this.menuToRegisterAnimate();
          break;

        case 'verdict':
          this.menuToVerdictAnimate();
          break;

        case 'about':
          this.menuToAboutAnimate();
          break;
      }

      setTimeout(() => {
        this.route.navigate([pageDes]);
      }, 400);
    }
  }
}
