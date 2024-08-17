package br.ifg.pw.model.entity;

import br.ifg.pw.model.dto.CadastroDTO;
import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Data
@Table(name = "tbusuario")
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
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
    @Column(name = "data_nascimento")
    Date dataNascimento;
    @Column(columnDefinition = "varchar(255)")
    String email;
    @Column(columnDefinition = "varchar(255)")
    String password;

    public User(Long id, String nomeCompleto, String telefone, String endereco, Date dataNascimento, String email, String password) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.password = BcryptUtil.bcryptHash(password);


        //todo verifica se a senha digita sem criptografia é a mesma do banco que está cryptografia  BcryptUtil.matches(password, email);
    }

    public User toDTO(CadastroDTO dto) {

        //todo criptografar senha em banco, utilizar Bcrypt

       return User.builder()
                .nomeCompleto(dto.getNomeCompleto())
                .email(dto.getEmail())
                .password(BcryptUtil.bcryptHash(dto.getPassword()))
                .endereco(dto.getEndereco())
                .telefone(dto.getTelefone())
                .build();


    }
}
