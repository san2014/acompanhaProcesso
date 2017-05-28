import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentoListView } from './documento-list-view';

@NgModule({
  declarations: [
    DocumentoListView,
  ],
  imports: [
    IonicPageModule.forChild(DocumentoListView),
  ],
  exports: [
    DocumentoListView
  ]
})
export class DocumentoListViewModule {}
