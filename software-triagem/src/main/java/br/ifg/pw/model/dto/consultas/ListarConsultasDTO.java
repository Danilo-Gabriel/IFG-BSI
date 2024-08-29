package br.ifg.pw.model.dto.consultas;

public class ListarConsultasDTO {
    int id;

//    int iduser;
    int paciente;
    String especialidade;
    String local;
    String data;
    String hora;
    String status;

    public ListarConsultasDTO(int id,String paciente,String especialidade,String local,
                              String data,String hora,String status){
        this.id = id;
//        this.iduser = iduser;
        this.paciente = Integer.parseInt(paciente);
        this.especialidade = especialidade;
        this.local = local;
        this.data = data;
        this.hora = hora;
        this.status = status;

    }

    public ListarConsultasDTO(){

    }

}
