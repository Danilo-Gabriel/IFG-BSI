package br.ifg.pw.model.dto;

import br.ifg.pw.model.entity.User;
import io.quarkus.elytron.security.common.BcryptUtil;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CadastroDTO {
     String nomeCompleto;
     String telefone;
     String endereco;
     String dataNascimento   ;
     String email;
     String senha;

   

    public CadastroDTO(String nomeCompleto, String telefone, String endereco, String dataNascimento, String email, String senha) {
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.senha = senha;
    }

    public User toEntity(CadastroDTO dto) {

        return User.builder()
                .nomeCompleto(dto.getNomeCompleto())
                .email(dto.getEmail())
                .senha(dto.getSenha())
                .endereco(dto.getEndereco())
                .telefone(dto.getTelefone())
                .build();


    }
}
