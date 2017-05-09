import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentoListDetail } from './../../components/documento-list-detail/documento-list-detail';


@IonicPage()
@Component({
  selector: 'page-acompanha-documento',
  templateUrl: 'acompanha-documento.html',
})
export class AcompanhaDocumento {

  documentos: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    
    this.initialize();

  }

  initialize(){
    this.documentos = [
      {numero: 1, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Ribeira'},
      {numero: 2, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Vila Ruy Barbosa'},
      {numero: 3, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Uruguai'},
      {numero: 4, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Bonfim'},
      {numero: 5, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Cabula'}
    ]
  }

  detalharDocumento(documento: any){

    console.log(documento);
    
    this.navCtrl.push(DocumentoListDetail, {'documento' : documento});

  }

}
