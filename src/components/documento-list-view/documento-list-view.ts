import { Component, Input } from '@angular/core';

@Component({
  selector: 'documento-list-view',
  templateUrl: 'documento-list-view.html'
})
export class DocumentoListView {

  @Input()
  documento: any;

}
