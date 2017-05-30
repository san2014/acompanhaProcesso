import { DocumentoAddPage } from './../pages/documento-add/documento-add';
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
import { UtilProvider } from "../providers/util-provider";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcompanhaDocumento,
    DocumentoListDetail,
    DocumentoListView,
    DocumentoAddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcompanhaDocumento,
    DocumentoListDetail,
    DocumentoListView,
    DocumentoAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentoProvider,
    UtilProvider
  ]
})
export class AppModule {}