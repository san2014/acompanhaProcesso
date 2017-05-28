import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { UtilProvider } from "./util-provider";
import { AppConfig } from './../constantes/app-config';

@Injectable()
export class DocumentoProvider {

  documentosList: Array<any>;

  constructor(
    public http: Http,
    private local: Storage,
    private utilProvider: UtilProvider) {

  }

  initialize(){
    
    this.getDocumentosAdicionados();

  }

  getDocumentosAdicionados() : Promise<any>{

    return new Promise(resolve => {

     this.local.get('list_docs').then(data => {

        this.documentosList = data;
        
        resolve(this.documentosList);

      });        

    })
    

  }


  obterIdDocValido(documento: any): Promise<any>{

    let url: string;

    url = AppConfig.apiEndpoint;
    url = url + 'obterIdDocValido';
    url = url + '&tipoDoc=' +documento.tipoDocumentoModel.id;
    url = url + '&cein=' +documento.centroInformacaoModel.numero;
    url = url + '&ano=' +documento.ano;
    url = url + '&numero=' +documento.numero;
    url = url + '&codigoAcesso=' +documento.codigoAcesso;

    return new Promise(resolve => {

      this.http.get(url).map(res => res.json())
        .subscribe(data => {

          resolve(data);
          
        }, err => resolve(null));

      })

    
     
  }  

  addDocumento(documento: any){

    if (this.documentosList == undefined){
      
      this.documentosList = [];

    }

    this.documentosList.unshift(documento);

    console.log(documento);
    
    this.refreshListDocs(this.documentosList);

  }

  refreshListDocs(documentosList: Array<any>){

    this.local.set('list_docs', documentosList);

  }

  documentoJaExiste(documento: any): boolean{
    
    if (this.documentosList == null){

      return false;

    }

    for (let row of this.documentosList){
      
      if (row.numero == documento.numero
            && row.ano == documento.ano 
              && row.centroInformacaoModel.numero == documento.centroInformacaoModel.numero){

        return true;

      }      

    }
    
    return false;

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
