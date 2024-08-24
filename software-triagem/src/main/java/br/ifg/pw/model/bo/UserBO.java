package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.user.CadastroUsuarioDTO;
import br.ifg.pw.model.dto.user.ListarUsuarioDTO;
import br.ifg.pw.model.entity.User;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.util.List;


@ApplicationScoped
public class UserBO {

    @Inject
    UserDAO dao;

    @Transactional
    public Response save(CadastroUsuarioDTO dto) {

        //todo ajustar os retornos com as mensagems corretas

        try {
            if (dto != null) {

                User exist = dao.findByEmail(dto.getEmail());

                if (exist != null) {
                    return Response.status(Response.Status.CONFLICT).build();
                }
                User userNew = User.builder()
                        .nomeCompleto(dto.getNomeCompleto())
                        .email(dto.getEmail())
                        .senha(dto.getSenha())
                        .endereco(dto.getEndereco())
                        .telefone(dto.getTelefone())
                        .build();
                this.dao.persist(userNew);
                return Response.status(Response.Status.CREATED).build();
            }
        } catch (Exception e) {

            return Response.serverError().build();
        }

        return Response.serverError().build();
    }

    public Response list() {

        List<ListarUsuarioDTO> list = dao.findAllUsers();

        return Response.ok(list).build();
    }

}
