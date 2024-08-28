export class TriagemDTO {

  constructor(
    public id? :string,
    public especialidade?: string,
    public hipertensao?: string,
    public diabetico?: string,
    public febre?: string,
    public dor?: string,
    public intensidadeDor?: string,
    public peso?: string,
    public resultado?: string
  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
