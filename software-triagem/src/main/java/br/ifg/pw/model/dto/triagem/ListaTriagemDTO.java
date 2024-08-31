package br.ifg.pw.model.dto.triagem;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListaTriagemDTO {
    long id;
    String idUsuario;
    String especialidade;
    String hipertensao;
    String diabetico;
    String febre;
    String dor;
    String intensidadeDor;
    String peso;
    String resultado;

    public  ListaTriagemDTO(long id,String idUsuario,String especialidade,String hipertesao,
                                 String diabetico,String febre,String dor,String intensidadeDor,String peso,
                                 String resultado){
        this.id = id;
        this.idUsuario = idUsuario;
        this.especialidade = especialidade;
        this.hipertensao  = hipertesao;
        this.diabetico = diabetico;
        this.febre = febre;
        this.dor =dor;
        this.intensidadeDor = intensidadeDor;
        this.peso = peso;
        this.resultado = resultado;

    }



}
