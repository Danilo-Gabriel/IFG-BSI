package br.ifg.pw.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Data
@Table(name = "tbusuario")
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    @Column(name = "nome_completo", columnDefinition = "varchar(255) not null")
    String nomeCompleto;
    @Column(columnDefinition = "varchar(255) not null")
    String email;
    @Column(columnDefinition = "varchar(255) not null")
    String senha;
    @Column(columnDefinition = "varchar(255) not null")
    String telefone;
    @Column(name = "data_nascimento")
    Date dataNascimento;


    public User(Long id, String nomeCompleto, String email, String senha, String telefone, Date dataNascimento) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
    }

    public User() {

    }
}
