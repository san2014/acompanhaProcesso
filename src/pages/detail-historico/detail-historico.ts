import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-historico',
  templateUrl: 'detail-historico.html',
})
export class DetailHistoricoPage {

  movimentacao: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.initialize();
  }


  initialize() {

    this.movimentacao = this.navParams.get('historico');
 
  }

}
