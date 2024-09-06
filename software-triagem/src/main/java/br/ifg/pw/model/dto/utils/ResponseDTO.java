package br.ifg.pw.model.dto.utils;

import br.ifg.pw.model.entity.User;
import io.quarkus.elytron.security.common.BcryptUtil;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ResponseDTO {

    private String id;
    private String email;
    private String senha;
    private String message;


    @Builder
    public ResponseDTO(String id, String email, String senha, String message) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.message = message;
    }

    public static ResponseDTO toResponse(User user) {
        return ResponseDTO.builder()
                .id(BcryptUtil.bcryptHash(user.getId().toString()))
                .email(user.getEmail())
                .senha(user.getSenha())
                .build();
    }
}
