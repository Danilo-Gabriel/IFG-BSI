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
    @Column(name = "data_nascimento")
    Date dataNascimento;
    @Column(columnDefinition = "varchar(255)")
    String email;
    @Column(columnDefinition = "varchar(255)")
    String senha;

//    @Column(columnDefinition = "Boolean not null")
//    Boolean ativo;

    @Builder
    public User(Long id, String nomeCompleto, String telefone, String endereco, Date dataNascimento, String email, String senha) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.senha = BcryptUtil.bcryptHash(senha);


        //todo verifica se a senha digita sem criptografia é a mesma do banco que está cryptografia  BcryptUtil.matches(senha, email);
    }


    public User(){

    }

    public CadastroDTO toDTO(User user) {

        //todo criptografar senha em banco, utilizar Bcrypt

        return CadastroDTO.builder()
                .nomeCompleto(this.nomeCompleto)
                .email(this.email)
                .senha(this.senha)
                .endereco(this.endereco)
                .telefone(this.telefone)
                .build();


    }




}
