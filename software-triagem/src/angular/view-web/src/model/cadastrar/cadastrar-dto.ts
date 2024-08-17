export class CadastroDTO {

  constructor(
    public nomeCompleto? : string,
    public telefone? : string,
    public endereco? : string,
    public dataNascimento? : string,
    public email? : string,
    public password? : string
  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
