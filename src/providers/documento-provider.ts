import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DocumentoProvider {

  documentosList: any[] = [
      {numero: 1, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Ribeira'},
      {numero: 2, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Vila Ruy Barbosa'},
      {numero: 3, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Uruguai'},
      {numero: 4, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Bonfim'},
      {numero: 5, ano: '2017', centroInformacaoModel: {numero: '5911000000'} , requerente: 'Cabula'}
  ];

  constructor(public http: Http) {
    
  }

  getDocumentoPesquisa(documento: any){

    let great: boolean = false;

    this.documentosList.forEach(element => {
 
      if (element.numero == documento.numero &&
            element.ano == documento.ano &&
              element.centroInformacaoModel.numero == documento.centroInformacaoModel.numero){

                great = true;

              }
    });

    if (great){
      
      console.log('documento encontrado na lista.');

    }else{
      
      console.log('documento não encontrado.');

    }

  }

  getHistoricoDocumento(documento: any){

    return [
      {id: 1, data: Date.now(), estagio: 'Inicial', parecer:'parecer 1'},
      {id: 2, data: Date.now(), estagio: 'Entrada', parecer:'parecer 2'},
      {id: 3, data: Date.now(), estagio: 'Distribuição', parecer:'parecer 3'},
      {id: 4, data: Date.now(), estagio: 'Encaminhado', parecer:'parecer 4'},
      {id: 5, data: Date.now(), estagio: 'Deferido', parecer:'parecer 5'},
      {id: 6, data: Date.now(), estagio: 'Arquivar', parecer:'parecer 6'}
    ]

  }

}
