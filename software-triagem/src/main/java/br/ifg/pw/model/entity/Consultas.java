//package br.ifg.pw.model.entity;
//import br.ifg.pw.model.dto.consultas.ConsultasDTO;
//import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
//import jakarta.inject.Inject;
//import jakarta.persistence.*;
//import lombok.*;
//import lombok.experimental.FieldDefaults;
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import io.quarkus.security.identity.SecurityIdentity;
//
//@Entity
//@Data
//@Table(name = "tbconsulta", uniqueConstraints={})
//@FieldDefaults(level = AccessLevel.PRIVATE)
//public class Consultas extends PanacheEntityBase {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    Long id;
//
//    @Column(name = "id_usuario", columnDefinition = "int(50)") // Armazena o ID do usuário que fez a triagem
//    int idUsuario;
//
//    @Column(name = "id_paciente", columnDefinition = "int(50)") // Armazena o ID do usuário que fez a triagem
//    String paciente;
//
//    @Column(name = "especialidades", columnDefinition = "varchar(255)")
//    String especialidade;
//
//    @Column(name = "endereco", columnDefinition = "varchar(255)") // Armazena o ID do usuário que fez a triagem
//    String local;
//
//
//    @Column(name = "data", columnDefinition = "date")
//    LocalDate  data;//
//
//    @Column(name = "horario", columnDefinition = "varchar(255)")
//    String hora;
//
//    @Column(name = "status", columnDefinition = "varchar(255)")
//    String status;
//
//    @Column(name = "data_criacao", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", updatable = false)
//    LocalDateTime dataCriacao; // Armazena a data e hora da criação
//
////    @Inject
////    SecurityIdentity identity; //  metodo que identifica o usuario para pegar o ID do usuário que fez o agendamento
//
//    @Builder
//    public Consultas(long id,int idUsuario,String paciente, String especialidade, String local , LocalDate data,
//                   String hora, String status) {
//        this.id =id;
//        this.idUsuario = idUsuario; // minhas implementação Captura o ID do usuário
//        this.paciente = paciente;
//        this.especialidade = especialidade;
//        this.local  = local ;
//        this.data = data;
//        this.hora = hora;
//        this.status = status;
//        this.dataCriacao = LocalDateTime.now(); //minha implementação Define a data de criação
//
//    }
//
//    public ConsultasDTO toDTO(Consultas consultas) {
//        return ConsultasDTO.builder()
//
//                .idUsuario(String.valueOf(this.idUsuario))// Método para listar apenas id do usuário, especialidade e resultado
//                .paciente(this.paciente)
//                .especialidade(this.especialidade)
//                .local(this.local)
//                .data(String.valueOf(this.data))
//                .hora(this.hora)
//                .status(this.status)
//                .build();
//    }
//
//    public Consultas() {
//        this.dataCriacao = LocalDateTime.now(); // Atribui a data de criação no construtor padrão
//    }
//}