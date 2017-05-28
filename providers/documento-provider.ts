import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs/Observable";
import { UtilProvider } from "./util-provider";

@Injectable()
export class DocumentoProvider {

  documentosList: Array<any>;

  constructor(
    public http: Http,
    private local: Storage,
    private utilProvider: UtilProvider) {

  }

  initialize(){
    
    //this.getDocumentosAdicionados();

  }

  getDocumentosAdicionados() : Promise<any>{

    return new Promise(resolve => {

     this.local.get('list_docs').then(data => {

        data = this.utilProvider.trataArray(data);

        this.documentosList = data;
        
        resolve(this.documentosList);

      });        

    })
    

  }


  addDocumento(documento: any){

    if (this.documentosList == undefined){
      
      this.documentosList = [documento];

    }else{

      this.documentosList.unshift(this.documentosList);

    }

    console.log(this.documentosList);
    this.local.set('list_docs', this.documentosList);

  }

  documentoJaExiste(documento: any): boolean{

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

  obterIdDocValido(documento: any){

    let url: string;

/*    url = 'http://172.24.83.240:8080/ServicosRestful/documentoResource/obterporNumero';
    url = url + '/' +documento.tipoDocumentoModel.id;
    url = url + '/' +documento.centroInformacaoModel.numero;
    url = url + '/' +documento.ano;
    url = url + '/' +documento.numero;
    url = url + '/' +documento.codigoAcesso;*/

    url = 'http://www.sucom.ba.gov.br/servicosonline/Web/service/proxyService.php?acao=obterIdDocValido';
    url = url + '&tipoDoc=' +documento.tipoDocumentoModel.id;
    url = url + '&cein=' +documento.centroInformacaoModel.numero;
    url = url + '&ano=' +documento.ano;
    url = url + '&numero=' +documento.numero;
    url = url + '&codigoAcesso=' +documento.codigoAcesso;

    return this.http.get(url).map(res => res.json())
     
  }

}
