package br.ifg.pw.model.dto.triagem;

import br.ifg.pw.model.entity.Triagem;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TriagemUsuarioDTO {


    int idUsuario;
    String especialidade;
    String hipertensao;
    String diabetico;
    String febre;
    String dor;
    String intensidadeDor;
    String peso;
    double resultado;



    public TriagemUsuarioDTO(int idUsuario,String especialidade, String hipertensao, String diabetico,
                             String febre, String dor,String intensidadeDor,String peso,double resultado) {
        this.idUsuario = Integer.parseInt(identity.getPrincipal().getName()); // minhas implementação Captura o ID do usuário
        this.especialidade = especialidade;
        this.hipertensao = hipertensao;
        this.diabetico = diabetico;
        this.febre = febre;
        this.dor = dor;
        this.intensidadeDor = intensidadeDor;
        this.peso = peso;
        this.resultado = resultado;
    }

//    public Triagem toEntity(TriagemUsuarioDTO dto) {
//
//        return Triagem.builder()
//                .idUsuario(dto.getIdUsuario())
//                .especialidade(dto.getEspecialidade())
//                .hipertensao(dto.getHipertensao())
//                .diabete(dto.getDiabete())
//                .febre(dto.getFebre())
//                .dor(dto.getDor())
//                .intensidade(dto.getIntensidade())
//                .peso(dto.getPeso())
//                .resultado(dto.getResultado())
//                .build();
//
//
//    }

//    ver qual dos dois metodos estão corretos
public Triagem toEntity() {
    return Triagem.builder()
            .idUsuario(this.idUsuario)
            .especialidade(this.especialidade)
            .hipertensao(this.hipertensao)
            .diabetico(this.diabetico) // Corrigido para usar o campo correto
            .febre(this.febre)
            .dor(this.dor)
            .intensidadeDor(this.intensidadeDor) // Corrigido para usar o nome correto
            .peso(this.peso)
            .resultado(this.resultado)
            .build();
}

    public TriagemUsuarioDTO(){

    }
}
