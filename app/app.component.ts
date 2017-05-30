import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AcompanhaDocumento } from "../pages/acompanha-documento/acompanha-documento";

@Component({
  template: `
    <ion-menu [content]="rootIonNav">
      <ion-content>
        <ion-list>
          <ion-list-header>
            <button menuClose ion-item *ngFor="let menuSection of menuSections" (click)="navToComponent(menuSection.component)">
              {{ menuSection.title }}
              <ion-icon name="arrow-foward" item-right></ion-icon>
            </button>
            <button ion-button menuClose>Close Menu</button>
          </ion-list-header>
        </ion-list>
      </ion-content>

    </ion-menu>

    <ion-nav #rootIonNav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = AcompanhaDocumento;

  menuSections: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      this.menuSections = [
        {title: 'pages.tarefa.title', component: AcompanhaDocumento},
      ]

    });
  }

  navToComponent(component: any){
    console.log('navToComponent')
    this.nav.setRoot(component); 
  }

}

