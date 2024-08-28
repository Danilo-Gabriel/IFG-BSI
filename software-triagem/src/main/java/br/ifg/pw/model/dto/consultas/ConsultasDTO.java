package br.ifg.pw.model.dto.consultas;

import br.ifg.pw.model.entity.Consultas;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConsultasDTO {


    int idUsuario;
    int paciente;
    String especialidade;
    String local;
    String data;
    String hora;
    String status;




    public ConsultasDTO(int idUsuario, int paciente, String especialidade, String local, String data,
                             String hora, String status) {
        this.idUsuario = Integer.parseInt(identity.getPrincipal().getName()); // minhas implementação Captura o ID do usuário
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.local = local;
        this.data = data;
        this.hora = hora;
        this.status = status;

    }

//    public Consultas toEntity(ConsultasDTO dto) {
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
    public Consultas toEntity() {
        return Consultas.builder()
                .idUsuario(this.idUsuario)
                .paciente(this.paciente)
                .especialidade(this.especialidade)
                .local(this.local)
                .data(this.data) // Corrigido para usar o campo correto
                .hora(this.hora)
                .status(this.status)
                .build();
    }

    public ConsultasDTO(){

    }
}
