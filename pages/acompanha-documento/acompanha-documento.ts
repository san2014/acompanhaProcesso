import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentoListDetail } from './../../components/documento-list-detail/documento-list-detail';
import { DocumentoAddPage } from './../documento-add/documento-add';
import { DocumentoProvider } from './../../providers/documento-provider';

@IonicPage()
@Component({
  selector: 'page-acompanha-documento',
  templateUrl: 'acompanha-documento.html',
})
export class AcompanhaDocumento {

  documentos: any[];

  constructor(
    public navCtrl: NavController, 
    private documentoProvider: DocumentoProvider,
    public navParams: NavParams) {
    
    this.initialize();

  }

  initialize(){

    this.documentos = [];

		this.documentoProvider.getDocumentosAdicionados().then( data => {
			
			this.documentos = data;

		}); 


  }

  detalharDocumento(documento: any){
    
    this.navCtrl.push(DocumentoListDetail, {'documento' : documento});

  }

  addDocumento(){

    this.navCtrl.push(DocumentoAddPage);

  }

}