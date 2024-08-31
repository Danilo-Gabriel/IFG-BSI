//package br.ifg.pw.model.dto.consultas;
//
//import br.ifg.pw.model.entity.Consultas;
//import lombok.AccessLevel;
//import lombok.Builder;
//import lombok.Data;
//import lombok.experimental.FieldDefaults;
//
//import java.time.LocalDate;
//
//
//@Builder
//@Data
//@FieldDefaults(level = AccessLevel.PRIVATE)
//public class ConsultasDTO {
//
//
//    String idUsuario;    ///linhas comentadas foi uma tentativa de implementação de captura do ide do usuario
//    String paciente;
//    String especialidade;
//    String local;
//    String data;
//    String hora;
//    String status;
//
//
//
//
//    public ConsultasDTO( String idUsuario,String paciente, String especialidade, String local, String data,
//                             String hora, String status) {
//       this.idUsuario = idUsuario; // minhas implementação Captura o ID do usuário
//        this.paciente = paciente;
//        this.especialidade = especialidade;
//        this.local = local;
//        this.data = data;
//        this.hora = hora;
//        this.status = status;
//
//    }
//
//    public Consultas toEntity(ConsultasDTO dto) {
//        return Consultas.builder()
//
//                .idUsuario(Integer.parseInt(dto.getIdUsuario()))
//                .paciente(dto.getPaciente())
//                .especialidade(dto.getEspecialidade())
//                .local(dto.getLocal())
//                .data(LocalDate.parse(dto.getData()))
//                .hora(dto.getHora())
//                .status(dto.getStatus())
//                .build();
//    }
//
//    public ConsultasDTO(){
//
//    }
//}
