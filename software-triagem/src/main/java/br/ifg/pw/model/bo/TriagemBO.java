package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.TriagemDAO;
import br.ifg.pw.model.dto.user.TriagemUsuarioDTO;
import br.ifg.pw.model.dto.user.ListarTriagemDTO;
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
    public Response save(TriagemUsuarioDTO dto) {

        //Ajustar aqui a logica da de salvar a triagem, a logica e simples,
        // o usuario podera fazer varias triagem

//        try {
//            if (dto != null) {
//
////                Triagem exist = dao.findByEmail(dto.getEmail());
//
//                if (exist != null) {
//                    return Response.status(Response.Status.CONFLICT).build();
//                }
//                User userNew = User.builder()
//                        .nomeCompleto(dto.getNomeCompleto())
//                        .email(dto.getEmail())
//                        .senha(dto.getSenha())
//                        .endereco(dto.getEndereco())
//                        .telefone(dto.getTelefone())
//                        .build();
//                this.dao.persist(userNew);
//                return Response.status(Response.Status.CREATED).build();
//            }
//        } catch (Exception e) {
//
//            return Response.serverError().build();
//        }
//
//        return Response.serverError().build();
//    }

    public Response list() {

        List<ListarTriagemDTO> list = dao.findAllUsers();

        return Response.ok(list).build();
    }

}
