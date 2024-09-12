//package br.ifg.pw.model.entity;
//
//import br.ifg.pw.model.dto.triagem.TriagemUsuarioDTO;
//import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
//import jakarta.persistence.*;
//import lombok.AccessLevel;
//import lombok.Builder;
//import lombok.Data;
//import lombok.experimental.FieldDefaults;
//
//import java.time.LocalDate;
//
//@Entity
//@Data
//@Table(name = "tbtriagem")
//@FieldDefaults(level = AccessLevel.PRIVATE)
//public class Triagem extends PanacheEntityBase {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    Long id;
//
////    @Column(name = "id_usuario", columnDefinition = "varchar(10)")
////    String idUsuario;
//
//    @Column(name = "especialidade", columnDefinition = "varchar(255)")
//    String especialidade;
//
//    @Column(name = "hipertensao", columnDefinition = "varchar(255)")
//    String hipertensao;
//
//    @Column(name = "diabetico", columnDefinition = "varchar(255)")
//    String diabetico;
//
//    @Column(name = "febre", columnDefinition = "varchar(255)")
//    String febre;
//
//    @Column(name = "dor", columnDefinition = "varchar(255)")
//    String dor;
//
//    @Column(name = "intensidade_dor", columnDefinition = "varchar(255)")
//    String intensidade;
//
//    @Column(name = "peso", columnDefinition = "varchar(255)")
//    String peso;
//
//    @Column(name = "media_ponderada", columnDefinition = "varchar(50)")
//    String mediaPonderada;
//
//    @Column(name = "data_criacao", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", updatable = false)
//    LocalDate dataCriacao;
//
//
//    @Builder
//    public Triagem(long id, String especialidade, String hipertensao, String diabetico,
//                    String febre, String dor, String intensidade, String peso, String mediaPonderada) {
//
//        this.id = id;
//        this.especialidade = especialidade;
//        this.hipertensao = hipertensao;
//        this.diabetico = diabetico;
//        this.febre = febre;
//        this.dor = dor;
//        this.intensidade = intensidade;
//        this.peso = peso;
//        this.mediaPonderada = String.valueOf(mediaPonderada);
//        this.dataCriacao = LocalDate.now();
//    }
//
//    public Triagem() {
//        this.dataCriacao = LocalDate.now();
//    }
//
//
//
//    public TriagemUsuarioDTO toDTO() {
//        return TriagemUsuarioDTO.builder()
//
//
//                .id(Math.toIntExact(this.id))
//                .especialidade(this.especialidade)
//                .hipertensao(this.hipertensao)
//                .diabetico(this.diabetico)
//                .febre(this.febre)
//                .dor(this.dor)
//                .intensidade(this.intensidade)
//                .peso(this.peso)
//                .mediaPonderada(this.mediaPonderada)
//                .build();
//    }
//
//
//}
