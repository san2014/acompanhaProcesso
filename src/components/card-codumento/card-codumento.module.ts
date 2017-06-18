import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardCodumentoComponent } from './card-codumento';

@NgModule({
  declarations: [
    CardCodumentoComponent,
  ],
  entryComponents: [
    CardCodumentoComponent,
  ],  
  imports: [
    IonicPageModule.forChild(CardCodumentoComponent),
  ],
  exports: [
    CardCodumentoComponent
  ]
})
export class CardCodumentoComponentModule {}
