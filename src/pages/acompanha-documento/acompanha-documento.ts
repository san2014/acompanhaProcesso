import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DocumentoListDetail } from './../../components/documento-list-detail/documento-list-detail';
import { DocumentoAddPage } from './../documento-add/documento-add';
import { DocumentoProvider } from './../../providers/documento-provider';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentViewerOptions, DocumentViewer } from "@ionic-native/document-viewer";

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
    private iab: InAppBrowser,
    private document: DocumentViewer,
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

  openBrowser(){

    const options: DocumentViewerOptions = {
      title: "doc",
      documentView: {closeLabel : 'ok'},
      navigationView: {closeLabel : 'ok'},
      email: {enabled: false},
      print: {enabled: false},
      openWith: {enabled: true},
      bookmarks: {enabled: true},
      search: {enabled: true},
      autoClose: {onPause: false}
    }    

    let url : string = 'http://www.sucom.ba.gov.br/servicosonline/Web/documentoViewReceberDocumento.php?documentoId=8648572';

    this.document.viewDocument('assets/LICENCAPROVISORIA_8648572.pdf', 'application/pdf', options);

    //const browser = this.iab.create('http://www.sucom.ba.gov.br/servicosonline/Web/documentoViewReceberDocumento.php?documentoId=8648572');

    //browser.show();

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

}
