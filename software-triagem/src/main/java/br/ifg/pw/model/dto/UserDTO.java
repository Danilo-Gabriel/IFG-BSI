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

    String email;

    String senha;

    @Builder
    public UserDTO(String email, String senha) {
        this.email = email;
        this.senha = senha;

    }

    public UserDTO(){

    }
}
