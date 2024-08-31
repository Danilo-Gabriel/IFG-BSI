package br.ifg.pw.model.dto.user;
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
     String email;




    public ListarUsuarioDTO(Long id, String nomeCompleto, String telefone, String email) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.email = email;
    }

    public ListarUsuarioDTO(){

    }
}
