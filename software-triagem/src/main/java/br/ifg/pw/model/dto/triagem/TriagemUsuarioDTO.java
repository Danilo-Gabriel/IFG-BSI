//package br.ifg.pw.model.dto.triagem;
//
//import br.ifg.pw.model.dto.user.CadastroUsuarioDTO;
//import br.ifg.pw.model.entity.Triagem;
//import br.ifg.pw.model.entity.User;
//import lombok.AccessLevel;
//import lombok.Builder;
//import lombok.Data;
//import lombok.experimental.FieldDefaults;
//
//@Builder
//@Data
//@FieldDefaults(level = AccessLevel.PRIVATE)
//public class TriagemUsuarioDTO {
//
//    String idUsuario; // id que pega o id do usuario que fez a triagem
//    String especialidade;
//    String hipertensao;
//    String diabetico;
//    String febre;
//    String dor;
//    String intensidadeDor;
//    String peso;
//    String resultado;
//
//    // Construtor
//    public TriagemUsuarioDTO(String idUsuario, String especialidade, String hipertensao,
//                             String diabetico, String febre, String dor,
//                             String intensidadeDor, String peso, String resultado) {
//        this.idUsuario = idUsuario; //id que pega o id do usuario que fez a triagem
//        this.especialidade = especialidade;
//        this.hipertensao = hipertensao;
//        this.diabetico = diabetico;
//        this.febre = febre;
//        this.dor = dor;
//        this.intensidadeDor = intensidadeDor;
//        this.peso = peso;
//        this.resultado = resultado;
//    }
//
//    // Método para converter DTO para entidade
//
//
//    public Triagem toEntity(TriagemUsuarioDTO dto) {
//
//        return Triagem.builder()
//
//                .especialidade(dto.getEspecialidade())
//                .hipertensao(dto.getHipertensao())
//                .diabetico(dto.getDiabetico())
//                .febre(dto.getFebre())
//                .dor(dto.getDor())
//                .intensidadeDor(dto.getIntensidadeDor())
//                .peso(dto.getPeso())
//
//
//                .build();
//
//
//    }
//
//    public TriagemUsuarioDTO(){
//
//    }
//
//    // Construtor vazio
//
//}