import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-responder-convite',
  templateUrl: 'responder-convite.html',
})
export class ResponderConvitePage {

  @Input()
  documento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.initialize();

  }

  initialize(){
    
    this.documento = this.navParams.get('documento');

  }

  responder(){
    //
  }


}
