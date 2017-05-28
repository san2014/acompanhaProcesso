import { AcompanhaDocumento } from './../acompanha-documento/acompanha-documento';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TipoDocumento } from "../../model/tipo-documento";
import { UtilProvider } from "../../providers/util-provider";
import { DocumentoProvider } from "../../providers/documento-provider";

@IonicPage()
@Component({
  selector: 'page-documento-add',
  templateUrl: 'documento-add.html',
})
export class DocumentoAddPage {

  documento: any;
  docAddForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: FormBuilder,
    public utilProvider: UtilProvider,
    public documentoProvider: DocumentoProvider,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController
    ) {

      this.initialize();

  }

  alert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: msg,
      buttons: ['ok']
    });
    alert.present();
  }  

  private initialize(){

    this.documento = {tipoDocumentoModel: {id:'', sigla:''}, centroInformacaoModel: {numero: ''}, ano: '', numero: ''};
    
    this.docAddForm = this.fb.group({
      'tipoDocumento': ['',Validators.required],
      'cein' : ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      'ano' : ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'numero' : ['',Validators.required],
      'codigoAcesso' : ['',Validators.required]
    });

  }  

  getTipoDocumento(tipoDocumento: TipoDocumento): string{
    return TipoDocumento[tipoDocumento];
  }

  adicionarDocumento(){

    if (this.documentoProvider.documentoJaExiste(this.documento) == true){

      this.alert('Documento já adicionado!');

      return false;

    }

      
    this.documentoProvider.addDocumento(this.documento);

    this.presentToast('Documento adicionado com sucesso!');

    this.navCtrl.push(AcompanhaDocumento);

/*    this.documentoProvider.obterIdDocValido(this.documento)
      .subscribe(
        (data) => {

          if (data != undefined){

            this.documento.id = data.id;

            this.ngZone.run(() => {
              
              this.documentoProvider.addDocumento(this.documento);

              this.presentToast('Documento adicionado com sucesso!');

            });        

          }else{

            this.alert("Documento não encontrado");

          }
        } 
      );*/
  }

  presentToast(msg: string) {

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();

  }

}
