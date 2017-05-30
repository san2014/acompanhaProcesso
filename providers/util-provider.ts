import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TipoDocumento } from "../model/tipo-documento";


@Injectable()
export class UtilProvider {

  getTiposDocumentosApp():Array<TipoDocumento>{
   
    return [TipoDocumento.PR,TipoDocumento.EX,TipoDocumento.OS,TipoDocumento.SE,TipoDocumento.SF];

  }

  trataArray(obj: any){
    
    if (!Array.isArray(obj)){
     
      obj = [obj];

    }

    return obj;
  }

}
