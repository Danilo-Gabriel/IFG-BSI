package br.ifg.pw.model.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.Date;
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDTO {

    String nomeCompleto;

    String telefone;

    String endereco;

    Date dataNascimento;

    String sexo;

    String email;

    String senha;





    @Builder
    public UserDTO(String nomeCompleto, String telefone, String endereco,
                   Date dataNascimento,String sexo,String email, String senha,) {
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.email = email;
        this.senha = senha;

    }
}
