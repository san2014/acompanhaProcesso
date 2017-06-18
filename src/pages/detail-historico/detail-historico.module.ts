import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailHistoricoPage } from './detail-historico';

@NgModule({
  declarations: [
    DetailHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailHistoricoPage)
  ],
  exports: [
    DetailHistoricoPage
  ]
})
export class DetailHistoricoPageModule {}
