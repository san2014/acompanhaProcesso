import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
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
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
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

  getTipoDocumento(
    tipoDocumento: TipoDocumento): string{
    return TipoDocumento[tipoDocumento];
  }

  adicionarDocumento(){

    if (this.documentoProvider.documentoJaExiste(this.documento) == true){

      this.alert('Documento já adicionado!');

      return false;

    }

    let loading = this.loadingCtrl.create({
      content: 'consultando...'
    });

    loading.present();

    this.documentoProvider.obterIdDocValido(this.documento)
      .then(data =>{

        if (data == undefined){
         
          loading.dismiss();

          this.alert("Informações inválidas");

        }else{

          this.documentoProvider.addDocumento(data);

          loading.dismiss();

          this.presentToast('Documento adicionado com sucesso!');


          this.navCtrl.pop();

        }


      })
      .catch(err => this.alert("Informações inválidas"));

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
