package br.ifg.pw.model.dto.consulta;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data

@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListarConsultasDTO {
    Long id;
    String id_paciente;
    String especialidade;
    String local;
    String date;
    String status;
    String time;


    public ListarConsultasDTO(long id, String id_paciente, String especialidade, String local, String date, String status, String time) {
        this.id = id;
        this.id_paciente = id_paciente;
        this.especialidade = especialidade;
        this.local = local;
        this.date = date;
        this.status = status;
        this.time = time;
    }
}
