import { AcompanhaDocumento } from './../pages/acompanha-documento/acompanha-documento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DocumentoListDetail } from './../components/documento-list-detail/documento-list-detail';
import { DocumentoListView } from './../components/documento-list-view/documento-list-view';
import { DocumentoProvider } from "../providers/documento-provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcompanhaDocumento,
    DocumentoListDetail,
    DocumentoListView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcompanhaDocumento,
    DocumentoListDetail,
    DocumentoListView
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentoProvider
  ]
})
export class AppModule {}
