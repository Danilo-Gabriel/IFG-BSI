export class TriagemDTO {

  constructor(
    public id? :number,
    public especialidade?: string,
    public hipertensao?: string,
    public diabetico?: string,
    public febre?: string,
    public dor?: string,
    public intensidadeDor?: string,
    public peso?: number,
    public mediaPonderada?: number
  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
