package br.ifg.pw.model.dto.user;

import br.ifg.pw.model.entity.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CadastroUsuarioDTO {

     String nomeCompleto;
     String telefone;
     String endereco;
     String email;
     String senha;

   

    public CadastroUsuarioDTO(String nomeCompleto, String telefone, String endereco, String email, String senha) {
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
    }

    public User toEntity(CadastroUsuarioDTO dto) {

        return User.builder()
                .nomeCompleto(dto.getNomeCompleto())
                .email(dto.getEmail())
                .senha(dto.getSenha())
                .endereco(dto.getEndereco())
                .telefone(dto.getTelefone())
                .build();


    }

    public CadastroUsuarioDTO(){

    }
}
