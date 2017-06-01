
export class EndpointConfig{

    //public static apiEndpoint: string = 'http://www.sucomservicos/sucomservicos/Web/service/proxyService.php?acao=';
    public static apiEndpoint: string = 'http://www.sucom.ba.gov.br/servicosonline/Web/service/proxyService.php?acao=';

    public static getUrlObterIdDoc(
        tipoDoc: string, 
        cein: string, 
        ano : string,
        numero: string,
        codigoAcesso: string ): string {

        let url: string = `${this.apiEndpoint}obterIdDocValido&tipoDoc=${tipoDoc}&cein=${cein}`;
        url += `&ano=${ano}`;
        url += `&numero=${numero}`;
        url += `&codigoAcesso=${codigoAcesso}`;    

        console.log(url);

        return url;

    }

    public static getUrlObteeHistoricDoc(id: number): string {

        let url : string = `${this.apiEndpoint}obterHistoricoDoc`;
        url += `&doc_id=${id}`;

        return url;
    }

}