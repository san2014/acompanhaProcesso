import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DocumentoListDetail } from './../../components/documento-list-detail/documento-list-detail';
import { DocumentoAddPage } from './../documento-add/documento-add';
import { DocumentoProvider } from './../../providers/documento-provider';

@IonicPage()
@Component({
  selector: 'page-acompanha-documento',
  templateUrl: 'acompanha-documento.html',
})
export class AcompanhaDocumento {

  documentos: Array<any>;

  constructor(
    public navCtrl: NavController, 
    private documentoProvider: DocumentoProvider,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
    
    this.initialize();

  }

  initialize(){

    let loading = this.loadingCtrl.create({
      content: 'consultando...'
    });

    loading.present();
    

		this.documentoProvider.getDocumentosAdicionados().then( data => {
			
			this.documentos = data;

      loading.dismiss();

		}); 

  }

  detalharDocumento(documento: any){
    
    this.navCtrl.push(DocumentoListDetail, {'documento' : documento});

  }

  excluirDocumento(documento: any){

    let index = this.documentos.indexOf(documento);

    this.documentos.splice(index, 1);

    this.documentoProvider.refreshListDocs(this.documentos);

  }

  addDocumento(){

    this.navCtrl.push(DocumentoAddPage);

  }

  doRefresh(refresher){
    
    this.initialize();
    
    refresher.complete();
    
  }


}
