//package br.ifg.pw.model.entity;
//
//import br.ifg.pw.model.dto.triagem.TriagemUsuarioDTO;
//import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
//import jakarta.persistence.*;
//import lombok.*;
//import lombok.experimental.FieldDefaults;
//
//import java.time.LocalDateTime;
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
//    @Column(name = "id_usuario", columnDefinition = "int(10)")
//    String idUsuario;
//
//    @Column(name = "especialidades", columnDefinition = "varchar(255)")
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
//    String intensidadeDor;
//
//    @Column(name = "peso", columnDefinition = "varchar(255)")
//    String peso;
//
//    @Column(name = "media_ponderada", columnDefinition = "double")
//    String resultado;
//
//    @Column(name = "data_criacao", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", updatable = false)
//    LocalDateTime dataCriacao;
//
//    // Construtor que aceita o ID do usuário
//    @Builder
//    public Triagem(long id, int idUsuario, String especialidade, String hipertensao, String diabetico,
//                   String febre, String dor, String intensidadeDor, String peso, double resultado) {
//        this.id = id;
//        this.idUsuario = String.valueOf(idUsuario); // Recebe o ID do usuário como parâmetro
//        this.especialidade = especialidade;
//        this.hipertensao = hipertensao;
//        this.diabetico = diabetico;
//        this.febre = febre;
//        this.dor = dor;
//        this.intensidadeDor = intensidadeDor;
//        this.peso = peso;
//        this.resultado = String.valueOf(resultado);
//        this.dataCriacao = LocalDateTime.now(); // Define a data de criação
//    }
//
//    public TriagemUsuarioDTO toDTO( Triagem triagem) {
//        return TriagemUsuarioDTO.builder()
//                .idUsuario(String.valueOf(this.idUsuario))
//                .especialidade(this.especialidade)
//                .hipertensao(this.hipertensao)
//                .diabetico(this.diabetico)
//                .febre(this.febre)
//                .dor(this.dor)
//                .intensidadeDor(this.intensidadeDor)
//                .peso(this.peso)
//                .resultado(String.valueOf(this.resultado))
//                .build();
//    }
//
//
//
//    public Triagem() {
//        this.dataCriacao = LocalDateTime.now(); // Atribui a data de criação no construtor padrão
//    }
//}
