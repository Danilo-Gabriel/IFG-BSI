export class ConsutasDTO {

  constructor(
    public id? :string,
    public paciente? : string,
    public especialidade?: string,
    public local?: string,
    public data?: string,
    public hora?: string,
    public status?: string,

  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
