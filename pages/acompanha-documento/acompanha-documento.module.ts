import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhaDocumento } from './acompanha-documento';

@NgModule({
  declarations: [
    AcompanhaDocumento,
  ],
  imports: [
    IonicPageModule.forChild(AcompanhaDocumento),
  ],
  exports: [
    AcompanhaDocumento
  ]
})
export class AcompanhaDocumentoModule {}
