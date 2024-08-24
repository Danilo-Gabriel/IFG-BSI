package br.ifg.pw.rest;


import br.ifg.pw.model.bo.UserBO;
import br.ifg.pw.model.dto.user.CadastroUsuarioDTO;
import br.ifg.pw.model.dto.user.ListarUsuarioDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserBO bo;

    @POST
    @Transactional
    public Response create(CadastroUsuarioDTO dto) {
        return bo.save(dto);
    }

    @GET
    public Response list() {
        return bo.list();
    }

}
