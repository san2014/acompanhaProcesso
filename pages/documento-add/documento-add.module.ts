import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentoAddPage } from './documento-add';

@NgModule({
  declarations: [
    DocumentoAddPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentoAddPage),
  ],
  exports: [
    DocumentoAddPage
  ]
})
export class DocumentoAddPageModule {}
