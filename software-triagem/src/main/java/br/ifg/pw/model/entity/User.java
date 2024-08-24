package br.ifg.pw.model.entity;

import br.ifg.pw.model.dto.user.CadastroUsuarioDTO;
import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Entity
@Data
@Table(name = "tbusuario", uniqueConstraints={@UniqueConstraint(columnNames={"email"}, name = "email_unique")})
@FieldDefaults(level = AccessLevel.PRIVATE)

public class User extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "nome_completo", columnDefinition = "varchar(255)")
    String nomeCompleto;
    @Column(columnDefinition = "varchar(255)")
    String telefone;
    @Column(name = "endereco", columnDefinition = "varchar(255)")
    String endereco;
    @Column(name = "email", columnDefinition = "varchar(255)", unique = true)
    String email;
    @Column(columnDefinition = "varchar(255)")
    String senha;
    @Column(columnDefinition = "Boolean")
    Boolean ativo;

    @Builder
    public User(Long id, String nomeCompleto, String telefone, String endereco, String email, String senha, Boolean ativo) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.senha = BcryptUtil.bcryptHash(senha);
        this.ativo = true;
    }

    public CadastroUsuarioDTO toDTO(User user) {

        return CadastroUsuarioDTO.builder()
                .nomeCompleto(this.nomeCompleto)
                .email(this.email)
                .senha(this.senha)
                .endereco(this.endereco)
                .telefone(this.telefone)
                .build();
    }


    public User(){

    }



}
