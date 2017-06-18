import { DetailHistoricoPage } from './../../pages/detail-historico/detail-historico';
import { Component, Input } from '@angular/core';
import { NavParams, NavController, LoadingController, AlertController } from "ionic-angular";

import { DocumentoProvider } from './../../providers/documento-provider';
import { ResponderConvitePage } from "../../pages/responder-convite/responder-convite";

@Component({
  selector: 'documento-list-detail',
  templateUrl: 'documento-list-detail.html'
})
export class DocumentoListDetail {

  @Input()
  documento: any;
  historico: any;
  temProduto: boolean;
  emConvite: boolean;

  constructor(
      public navParams: NavParams,
      public documentoProvider: DocumentoProvider,
      public loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
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

        this.analisaHistorico(this.historico);

        loading.dismiss();

		});     

  }

  analisaHistorico(historico: any){

    historico.forEach(row => {
      
      if (row.estagioModel.descricao == "ARQUIVADO"){
        
        this.temProduto = true;

      }

    });

    if (historico[0].estagioModel.descricao == "EM CONVITE"){

      this.emConvite = true;

    }

  }

  detailMovimentacao(movimentacao){
    
    this.navCtrl.push(DetailHistoricoPage, {'historico' : movimentacao});

  }

  alert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: msg,
      buttons: ['ok']
    });
    alert.present();
  }   

  openBrowser(){

    const url = 'http://www.sucom.ba.gov.br/servicosonline/Web/emissaoAlvaraPubProvisoriaView.php?documentoId=8648572';
   
    window.open(url);

  }  

  responderConvite(){
    
    this.navCtrl.push(ResponderConvitePage, {documento: this.documento});

  }

}
