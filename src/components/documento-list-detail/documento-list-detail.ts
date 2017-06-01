import { DetailHistoricoPage } from './../../pages/detail-historico/detail-historico';
import { Component, Input } from '@angular/core';
import { NavParams, NavController, LoadingController } from "ionic-angular";

import { DocumentoProvider } from './../../providers/documento-provider';

@Component({
  selector: 'documento-list-detail',
  templateUrl: 'documento-list-detail.html'
})
export class DocumentoListDetail {

  @Input()
  documento: any;
  historico: any;

  constructor(
      public navParams: NavParams,
      public documentoProvider: DocumentoProvider,
      public loadingCtrl: LoadingController,
      public navCtrl: NavController) {

      this.initialize();
  }

  initialize(){
    
    let loading = this.loadingCtrl.create({
      content: 'carregando...'
    });

    loading.present();    

    this.documento = this.navParams.get('documento');


		this.documentoProvider.getHistoricoDocumento(this.documento.id)
      .then( data => {
			
		  	this.historico = data;

        loading.dismiss();

		});     

  }

  detailMovimentacao(movimentacao){
    
    this.navCtrl.push(DetailHistoricoPage, {'historico' : movimentacao});

  }

}
