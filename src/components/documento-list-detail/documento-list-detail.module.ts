import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentoListDetail } from './documento-list-detail';
import { ResponderConvitePageModule } from './../../pages/responder-convite/responder-convite.module';

@NgModule({
  declarations: [
    DocumentoListDetail,
  ],
  entryComponents: [
    
  ],
  imports: [
    IonicPageModule.forChild(DocumentoListDetail),
    ResponderConvitePageModule
  ],
  exports: [
    DocumentoListDetail
  ]
})
export class DocumentoListDetailModule {}
