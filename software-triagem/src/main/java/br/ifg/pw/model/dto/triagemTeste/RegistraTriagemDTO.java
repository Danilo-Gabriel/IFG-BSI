package br.ifg.pw.model.dto.triagemTeste;
import br.ifg.pw.model.entity.TriagemTeste;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegistraTriagemDTO {
    long id;
    String especialidade;
    String hipertensao;
    String diabetico;
    String febre;
    String dor;
    String intensidade;
    String peso;
    String mediaPonderada;

    // Construtor
    public RegistraTriagemDTO(long id, String especialidade, String hipertensao,
                             String diabetico, String febre, String dor,
                             String intensidade, String peso, String mediaPonderada) {

        this.id = id;
        this.especialidade = especialidade;
        this.hipertensao = hipertensao;
        this.diabetico = diabetico;
        this.febre = febre;
        this.dor = dor;
        this.intensidade = intensidade;
        this.peso = peso;
        this.mediaPonderada = mediaPonderada;
    }




    public TriagemTeste enEntity(RegistraTriagemDTO dto) {

        return TriagemTeste.builder()


                .especialidade(dto.getEspecialidade())
                .hipertensao(dto.getHipertensao())
                .diabetico(dto.getDiabetico())
                .febre(dto.getFebre())
                .dor(dto.getDor())
                .intensidade(dto.getIntensidade())
                .peso(dto.getPeso())
                .mediaPonderada(dto.getMediaPonderada())
                .build();


    }

    public RegistraTriagemDTO(){

    }

}
