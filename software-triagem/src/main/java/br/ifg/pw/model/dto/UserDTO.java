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

    String email;

    String senha;

    String telefone;

    Date dataNascimento;

    @Builder
    public UserDTO(String nomeCompleto, String email, String senha, String telefone, Date dataNascimento) {
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
    }
}
