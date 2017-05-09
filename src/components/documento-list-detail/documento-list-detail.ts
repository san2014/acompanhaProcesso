import { Component, Input } from '@angular/core';
import { NavParams } from "ionic-angular";


@Component({
  selector: 'documento-list-detail',
  templateUrl: 'documento-list-detail.html'
})
export class DocumentoListDetail {

  @Input()
  documento: any;

  constructor(
      public navParams: NavParams) {

      this.initialize();
  }

  initialize(){
    
    this.documento = this.navParams.get('documento');

  }

}
