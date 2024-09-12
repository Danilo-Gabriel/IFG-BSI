package br.ifg.pw.model.dto.consultas;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListarConsultasDTO {


    long id;
    String paciente;
    String especialidade;
    String local;
    String date;
    String time;
    String status;

    public ListarConsultasDTO(long id, String paciente, String especialidade, String local,
                              String date,String status, String time){
        this.id = id;
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.local = local;
        this.date = date;
        this.time = time;
        this.status = status;

    }

    public ListarConsultasDTO(){

    }

}
