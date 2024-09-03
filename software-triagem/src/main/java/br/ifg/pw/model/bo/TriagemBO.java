package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.TriagemDAO;
import br.ifg.pw.model.dto.triagem.ListaTriagemDTO;
import br.ifg.pw.model.dto.triagem.TriagemUsuarioDTO;
import br.ifg.pw.model.entity.Triagem;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.util.List;

@ApplicationScoped
public class TriagemBO {

    @Inject
    TriagemDAO dao;

    @Transactional
    public Response salvarTriagem(TriagemUsuarioDTO dto) {
        // Verifica se o DTO não é nulo
        if (dto == null) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }

        try {
            // Verifica se já existe uma triagem para o usuário
            List<Triagem> triagensExistentes = dao.findByIdUsuario(dto.getIdUsuario());

            if (!triagensExistentes.isEmpty()) {
                // Se existe triagem, verifica as especialidades
                for (Triagem triagem : triagensExistentes) {
                    if (triagem.getEspecialidade().equals(dto.getEspecialidade())) {
                        // Especialidade igual, não permite armazenar
                        return Response.status(Response.Status.CONFLICT)
                                .entity("Triagem já registrada para esta especialidade.")
                                .build();
                    }
                }
            }

            // Se não houver triagem ou especialidade diferente, cria nova triagem
            Triagem triagemNew = Triagem.builder()
                    .idUsuario((int) dto.getIdUsuario())
                    .especialidade(dto.getEspecialidade())
                    .hipertensao(dto.getHipertensao())
                    .diabetico(dto.getDiabetico())
                    .febre(dto.getFebre())
                    .dor(dto.getDor())
                    .intensidadeDor(dto.getIntensidadeDor())
                    .peso(dto.getPeso())
                    .mediaPonderada(Double.parseDouble(dto.getMediaPonderada()))
                    .build();

            this.dao.persist(triagemNew);
            return Response.status(Response.Status.CREATED).build();

        } catch (Exception e) {
            // Em caso de erro, retorna erro do servidor
            return Response.serverError().build();
        }
    }

    public Response list() {
        List<ListaTriagemDTO> list = dao.findAllTriagem();
        return Response.ok(list).build();
    }
}