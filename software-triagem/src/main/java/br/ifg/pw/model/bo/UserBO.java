package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.CadastroDTO;
import br.ifg.pw.model.entity.User;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;


@ApplicationScoped
public class UserBO {

    @Inject
    UserDAO dao;

    @Transactional
    public Response registerUsuario(CadastroDTO dto) {


        //todo ajustar os retornos com as mensagems corretas

        try {
            if (dto != null) {
                User userNew = new User();
                userNew = userNew.toDTO(dto);
                this.dao.persist(userNew);
                return Response.status(Response.Status.CREATED).build();
            }
        } catch (Exception e) {

            return Response.serverError().build();
        }

        return Response.serverError().build();
    }

}
