package br.ifg.pw.model.entity;

import br.ifg.pw.model.dto.Consutas.ConsultasDTO;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDateTime;
import io.quarkus.security.identity.SecurityIdentity;
import javax.inject.Inject;

@Entity
@Data
@Table(name = "tbconsulta", uniqueConstraints={})
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Consultas extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "id_usuario", columnDefinition = "int(50)") // Armazena o ID do usuário que fez a triagem
    int idUsuario;

    @Column(name = "id_paciente", columnDefinition = "int(50)") // Armazena o ID do usuário que fez a triagem
    int paciente;

    @Column(name = "especialidades", columnDefinition = "varchar(255)")
    String especialidade;

    @Column(name = "endereco", columnDefinition = "varchar(255)") // Armazena o ID do usuário que fez a triagem
    String local;


    @Column(name = "data", columnDefinition = "date")
    LocalDate  data;//

    @Column(name = "horario", columnDefinition = "varchar(255)")
    String hora;

    @Column(name = "status", columnDefinition = "varchar(255)")
    String status;

    @Column(name = "data_criacao", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", updatable = false)
    LocalDateTime dataCriacao; // Armazena a data e hora da criação

    @Inject
    SecurityIdentity identity; //  metodo que identifica o usuario para pegar o ID do usuário que fez o agendamento

    @Builder
    public Consultas(int paciente, String especialidade, String Local , LocalDate  data,
                   String hora, String status,) {
        this.idUsuario = Integer.parseInt(identity.getPrincipal().getName()); // minhas implementação Captura o ID do usuário
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.Local  = Local ;
        this.data = data;
        this.hora = hora;
        this.status = status;
        this.dataCriacao = LocalDateTime.now(); //minha implementação Define a data de criação
    }

    public ConsutasDTO toDTO() {
        return ConsultasDTO.builder()
                .idUsuario(this.idUsuario)
                .paciente(this.paciente)
                .especialidade(this.especialidade)
                .local(this.local)
                .data(this.data)
                .hora(this.hora)
                .status(this.status)
                .build();
    }

    public Consultas() {
        this.dataCriacao = LocalDateTime.now(); // Atribui a data de criação no construtor padrão
    }
}