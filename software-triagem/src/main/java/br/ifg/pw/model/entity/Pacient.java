package br.ifg.pw.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.Data;

@Table(name = "tbpaciente")
@Entity
@Data
public class Pacient extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private String name;
    private String sobrenome;


}
