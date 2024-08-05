package br.ifg.pw.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Data
@Table(name = "tbusuario")
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "nome_completo", columnDefinition = "varchar(255)")
    String nomeCompleto;
    @Column(columnDefinition = "varchar(255)")
    String email;
    @Column(columnDefinition = "varchar(255)")
    String senha;
    @Column(columnDefinition = "varchar(255)")
    String telefone;
    @Column(name = "data_nascimento")
    Date dataNascimento;

}
