import { Component, Input } from '@angular/core';
import { NavParams } from "ionic-angular";

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
      public documentoProvider: DocumentoProvider) {

      this.initialize();
  }

  initialize(){
    
    this.documento = this.navParams.get('documento');

    this.historico = this.documentoProvider.getHistoricoDocumento(this.documento);

  }

}
