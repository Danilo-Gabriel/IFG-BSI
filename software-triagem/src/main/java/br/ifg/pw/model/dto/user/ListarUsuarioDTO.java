package br.ifg.pw.model.dto.user;

import br.ifg.pw.model.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListarUsuarioDTO {


     Long id;
     String nomeCompleto;
     String telefone;
     String endereco;
     String email;




    public ListarUsuarioDTO(Long id, String nomeCompleto, String telefone, String endereco, String email) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
    }

    public ListarUsuarioDTO(){

    }
}
