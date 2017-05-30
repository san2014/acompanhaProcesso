
export class EndpointConfig{

    public static apiEndpoint: string = 'http://localhost:80/sucomservicos/Web/service/proxyService.php?acao=';

    public static getUrlObterIdDoc(
        tipoDoc: string, 
        cein: string, 
        ano : string,
        numero: string,
        codigoAcesso: string ): string {

        let url = `${this.apiEndpoint} 
            obterIdDocValido&tipoDoc=${tipoDoc}
            &tipoDoc=${tipoDoc}&cein=${cein}
            &ano=${ano}&numero=${numero}
            &codigoAcesso=${codigoAcesso}`;        

        return url;

    }

}