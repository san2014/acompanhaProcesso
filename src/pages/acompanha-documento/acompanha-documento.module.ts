import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhaDocumento } from './acompanha-documento';
import { DocumentoListDetail } from "../../components/documento-list-detail/documento-list-detail";
import { DocumentoListView } from "../../components/documento-list-view/documento-list-view";
import { DocumentoAddPage } from "../documento-add/documento-add";
import { DetailHistoricoPage } from "../detail-historico/detail-historico";


@NgModule({
  declarations: [
    AcompanhaDocumento,
    DocumentoListDetail,
    DocumentoListView,
    DocumentoAddPage,
    DetailHistoricoPage    
  ],
  entryComponents: [
    AcompanhaDocumento,
    DocumentoListDetail,
    DocumentoListView,
    DocumentoAddPage,
    DetailHistoricoPage
  ],  
  imports: [
    IonicPageModule.forChild(AcompanhaDocumento),
  ],
  exports: [
    AcompanhaDocumento
  ]
})
export class AcompanhaDocumentoModule {}
