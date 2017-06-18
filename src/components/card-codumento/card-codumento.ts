import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-codumento',
  templateUrl: 'card-codumento.html'
})
export class CardCodumentoComponent {

  @Input()
  documento: any;

}
