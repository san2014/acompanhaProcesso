import { CardCodumentoComponentModule } from './../../components/card-codumento/card-codumento.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponderConvitePage } from './responder-convite';

@NgModule({
  declarations: [
    ResponderConvitePage,
  ],
  entryComponents: [
    ResponderConvitePage    
  ],
  imports: [
    IonicPageModule.forChild(ResponderConvitePage),
    CardCodumentoComponentModule
  ],
  exports: [
    ResponderConvitePage
  ]
})
export class ResponderConvitePageModule {}
