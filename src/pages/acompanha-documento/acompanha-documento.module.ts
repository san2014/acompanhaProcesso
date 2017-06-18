import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhaDocumento } from './acompanha-documento';
import { DocumentoListView } from "../../components/documento-list-view/documento-list-view";
import { DocumentoAddPage } from "../documento-add/documento-add";
import { DetailHistoricoPage } from "../detail-historico/detail-historico";
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { DocumentoListDetailModule } from "../../components/documento-list-detail/documento-list-detail.module";


@NgModule({
  declarations: [
    AcompanhaDocumento,
    //DocumentoListDetail,
    DocumentoListView,
    DocumentoAddPage,
    DetailHistoricoPage    
  ],
  entryComponents: [
    AcompanhaDocumento,
    //DocumentoListDetail,
    DocumentoListView,
    DocumentoAddPage,
    DetailHistoricoPage
  ],  
  imports: [
    IonicPageModule.forChild(AcompanhaDocumento),
    DocumentoListDetailModule
  ],
  exports: [
    AcompanhaDocumento
  ],
  providers:[
    File,
    Transfer
  ]
})
export class AcompanhaDocumentoModule {}
