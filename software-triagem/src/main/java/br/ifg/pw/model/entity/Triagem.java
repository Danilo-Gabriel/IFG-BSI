package br.ifg.pw.model.entity;

import br.ifg.pw.model.dto.triagem.TriagemUsuarioDTO;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.inject.Inject;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDateTime;
import io.quarkus.security.identity.SecurityIdentity;


@Entity
@Data
@Table(name = "tbtriagem", uniqueConstraints={})
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Triagem extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "id_usuario", columnDefinition = "int(10)") // Armazena o ID do usuário que fez a triagem
    int idUsuario;

    @Column(name = "especialidades", columnDefinition = "varchar(255)")
    String especialidade;

    @Column(name = "hipertensao", columnDefinition = "varchar(255)")
    String hipertensao;

    @Column(name = "diabetico", columnDefinition = "varchar(255)")
    String diabetico;

    @Column(name = "febre", columnDefinition = "varchar(255)")
    String febre;

    @Column(name = "dor", columnDefinition = "varchar(255)")
    String dor;

    @Column(name = "intensidade_dor", columnDefinition = "varchar(255)")
    String intensidadeDor;

    @Column(name = "peso", columnDefinition = "varchar(255)")
    String peso;

    @Column(name = "media_ponderada", columnDefinition = "double")
    double resultado;

    @Column(name = "data_criacao", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", updatable = false)
    LocalDateTime dataCriacao; // Armazena a data e hora da criação

//    @Inject
//    SecurityIdentity identity; //  metodo que identifica o usuario para pegar o ID do usuário que fez a triagem

    @Builder
    public Triagem(String especialidade, String hipertensao, String diabetico, String febre,
                   String dor, String intensidadeDor, String peso, double resultado) {
//        this.idUsuario = Integer.parseInt(identity.getPrincipal().getName()); // minhas implementação Captura o ID do usuário
        this.especialidade = especialidade;
        this.hipertensao = hipertensao;
        this.diabetico = diabetico;
        this.febre = febre;
        this.dor = dor;
        this.intensidadeDor = intensidadeDor;
        this.peso = peso;
        this.resultado = resultado;
        this.dataCriacao = LocalDateTime.now(); //minha implementação Define a data de criação
    }

    public TriagemUsuarioDTO toDTO() {
        return TriagemUsuarioDTO.builder()
                .idUsuario(this.idUsuario)
                .especialidade(this.especialidade)
                .hipertensao(this.hipertensao)
                .diabetico(this.diabetico)
                .febre(this.febre)
                .dor(this.dor)
                .intensidadeDor(this.intensidadeDor)
                .peso(this.peso)
                .resultado(this.resultado)
                .build();
    }

    public Triagem() {
        this.dataCriacao = LocalDateTime.now(); // Atribui a data de criação no construtor padrão
    }
}