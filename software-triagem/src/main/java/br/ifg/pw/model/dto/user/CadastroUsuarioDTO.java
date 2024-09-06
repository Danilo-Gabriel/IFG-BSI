package br.ifg.pw.model.dto.user;

import br.ifg.pw.model.entity.User;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
public class CadastroUsuarioDTO {

     Long id;
     @NotBlank(message = "Campo Nome completo obrigatório.")
     String nomeCompleto;
     String telefone;
     @NotBlank(message = "Campo Email obrigatório.")
     String email;
     @NotBlank(message = "Campo Senha obrigatório.")
     String senha;

   

    public CadastroUsuarioDTO(Long id, String nomeCompleto, String telefone, String endereco, String email, String senha) {
        this.id = id;
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
