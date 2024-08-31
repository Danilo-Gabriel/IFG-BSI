package br.ifg.pw.model.dto.user;

import br.ifg.pw.model.entity.User;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
public class CadastroUsuarioDTO {

     String nomeCompleto;
     String telefone;
     String email;
     String senha;

   

    public CadastroUsuarioDTO(String nomeCompleto, String telefone, String endereco, String email, String senha) {
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
    }

    public User toEntity(CadastroUsuarioDTO dto) {

        return User.builder()
                .nomeCompleto(dto.getNomeCompleto())
                .email(dto.getEmail())
                .senha(dto.getSenha())
                .telefone(dto.getTelefone())
                .build();


    }

    public CadastroUsuarioDTO(){

    }
}
