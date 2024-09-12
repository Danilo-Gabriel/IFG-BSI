package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.TriagemTesteDAO;
import br.ifg.pw.model.dto.triagemTeste.ListagemTriagemDTO;
import br.ifg.pw.model.dto.triagemTeste.RegistraTriagemDTO;
import br.ifg.pw.model.entity.TriagemTeste;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.util.List;
import static java.util.Objects.nonNull;


@ApplicationScoped
public class TriagemTesteBO {
    @Inject
    TriagemTesteDAO dao;

    @Transactional
    public Response salvartriagem(RegistraTriagemDTO dto) {
        try {
            System.out.println("Recebendo dados do dto: " + dto);
            if (nonNull(dto.getId())) {
                TriagemTeste entity = dao.findById(dto.getId());
                if(entity != null) {
                    entity.setEspecialidade(dto.getEspecialidade());
                    entity.setHipertensao(dto.getHipertensao());
                    entity.setFebre(dto.getFebre());
                    entity.setDor(dto.getDor());
                    entity.setIntensidade(dto.getIntensidade());
                    entity.setPeso(dto.getPeso());
                    entity.setMediaPonderada(String.valueOf(Double.parseDouble(dto.getMediaPonderada())));

                    this.dao.persist(entity);
                    return Response.status(Response.Status.CREATED).build();
//                return Response.status(Response.Status.OK).entity("Triagem atualizada com sucesso.").build();
                }
            }



            TriagemTeste triagemNew = TriagemTeste.builder()

                    .especialidade(dto.getEspecialidade())
                    .hipertensao(dto.getHipertensao())
                    .diabetico(dto.getDiabetico())
                    .febre(dto.getFebre())
                    .dor(dto.getDor())
                    .intensidade(dto.getIntensidade())
                    .peso(dto.getPeso())
                    .mediaPonderada(dto.getMediaPonderada())
                    .build();


            System.out.println("Tentando persistir nova triagem: "+dto);
            this.dao.persist(triagemNew);
//            return Response.status(Response.Status.CREATED).build();
            return Response.status(Response.Status.CREATED).entity("Triagem criada com sucesso.").build();

        } catch (Exception e) {

            e.printStackTrace();
            System.out.println("Recebendo DTO: " + dto);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro00000 ao registrar a triagem: " + e.getMessage()).build();
        }
    }



    public Response listar() {
        List<ListagemTriagemDTO> list = dao.findAllTriagemTeste();
        return Response.ok(list).build();
    }
}
