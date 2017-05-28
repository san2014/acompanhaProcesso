import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentoListDetail } from './documento-list-detail';

@NgModule({
  declarations: [
    DocumentoListDetail,
  ],
  imports: [
    IonicPageModule.forChild(DocumentoListDetail),
  ],
  exports: [
    DocumentoListDetail
  ]
})
export class DocumentoListDetailModule {}
