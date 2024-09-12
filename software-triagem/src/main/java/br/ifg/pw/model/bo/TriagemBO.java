//package br.ifg.pw.model.bo;
//
//import br.ifg.pw.model.dao.TriagemDAO;
//import br.ifg.pw.model.dto.triagem.ListaTriagemDTO;
//import br.ifg.pw.model.dto.triagem.TriagemUsuarioDTO;
//import br.ifg.pw.model.entity.Triagem;
//import jakarta.enterprise.context.ApplicationScoped;
//import jakarta.inject.Inject;
//import jakarta.transaction.Transactional;
//import jakarta.ws.rs.core.Response;
//
//import java.util.List;
//
//import static java.util.Objects.nonNull;
//
//@ApplicationScoped
//public class TriagemBO {
//
//    @Inject
//    TriagemDAO dao;
//
//    @Transactional
//    public Response salvarTriagem(TriagemUsuarioDTO dto) {
//        try {
//            if (nonNull(dto.getId())) {
//                // Se o ID existir, é uma atualização
//                Triagem entity = dao.findById(dto.getId());
//
//                if (entity != null) {
//                    // Atualiza a entidade existente
//                    entity.setEspecialidade(dto.getEspecialidade());
//                    entity.setHipertensao(dto.getHipertensao());
//                    entity.setFebre(dto.getFebre());
//                    entity.setDor(dto.getDor());
//                    entity.setIntensidade(dto.getIntensidade());
//                    entity.setPeso(dto.getPeso());
//                    entity.setMediaPonderada(String.valueOf(Double.parseDouble(dto.getMediaPonderada())));
//
//                    // Usa merge para atualizar
//                    dao.getEntityManager().merge(entity);
//                    return Response.status(Response.Status.OK).entity("Triagem atualizada com sucesso.").build();
//                }
//            }
//
//            // Caso não exista ID, cria uma nova entidade
//            Triagem triagemNew = Triagem.builder()
//                    .especialidade(dto.getEspecialidade())
//                    .hipertensao(dto.getHipertensao())
//                    .diabetico(dto.getDiabetico())
//                    .febre(dto.getFebre())
//                    .dor(dto.getDor())
//                    .intensidade(dto.getIntensidade())
//                    .peso(dto.getPeso())
//                    .mediaPonderada(dto.getMediaPonderada())
//                    .build();
//
//            // Persistir nova entidade
//            dao.persist(triagemNew);
//            return Response.status(Response.Status.CREATED).entity("Triagem criada com sucesso.").build();
//
//        } catch (Exception e) {
//            System.out.println("nnnnn");
//            e.printStackTrace();
//            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro00000 ao registrar a triagem: " + e.getMessage()).build();
//        }
//    }
//
//
//
//    public Response listar() {
//        List<ListaTriagemDTO> list = dao.findAllTriagem();
//        return Response.ok(list).build();
//    }
//}
