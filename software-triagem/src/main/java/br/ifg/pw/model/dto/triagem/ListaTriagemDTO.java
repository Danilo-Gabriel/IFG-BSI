package br.ifg.pw.model.dto.triagem;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListaTriagemDTO {
    private long id;
    private long idUsuario;
    private String especialidade;
    private String hipertensao;
    private String diabetico;
    private String febre;
    private String dor;
    private String intensidadeDor;
    private String peso;
    private String resultado;

    public  ListaTriagemDTO(long id,long idUsuario,String especialidade,String hipertesao,
                                 String diabetico,String febre,String dor,String intensidadeDor,String peso,
                                 String resultado){
        this.id = id;
        this.idUsuario = Long.parseLong(String.valueOf(idUsuario));
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
