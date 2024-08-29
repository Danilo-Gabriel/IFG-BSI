package br.ifg.pw.model.dto.consultas;

import br.ifg.pw.model.entity.Consultas;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConsultasDTO {


//    int iduser;    ///linhas comentadas foi uma tentativa de implementação de captura do ide do usuario
    int paciente;
    String especialidade;
    String local;
    String data;
    String hora;
    String status;




    public ConsultasDTO( int paciente, String especialidade, String local, String data,
                             String hora, String status) {
//       this.iduser = iduser; // minhas implementação Captura o ID do usuário
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.local = local;
        this.data = data;
        this.hora = hora;
        this.status = status;

    }

//    public Consultas Entity(ConsultasDTO dto) {
//
//        return Consultas.builder()
//                .idUsuario(dto.getIdUsuario())
    //              .paciente(dto.getPciente())
//                .especialidade(dto.getEspecialidade())
//                .local(dto.getLocal())
//                .data(dto.getData())
//                .hora(dto.getHora())
//                .status(dto.getStatus())
//
//                .build();
//
//
//    }

    //    ver qual dos dois metodos estão corretos
    public Consultas Entity() {
        return Consultas.builder()
//                .iduser(this.iduser)
                .paciente(this.paciente)
                .especialidade(this.especialidade)
                .local(this.local)
                .data(LocalDate.parse(this.data))
                .hora(this.hora)
                .status(this.status)
                .build();
    }

    public ConsultasDTO(){

    }
}
