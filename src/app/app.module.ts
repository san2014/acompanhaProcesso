import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UtilProvider } from "../providers/util-provider";
import { DocumentoProvider } from "../providers/documento-provider";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { AcompanhaDocumentoModule } from "../pages/acompanha-documento/acompanha-documento.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    AcompanhaDocumentoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentoProvider,
    UtilProvider,
    InAppBrowser,
    DocumentViewer
  ]
})
export class AppModule {}
