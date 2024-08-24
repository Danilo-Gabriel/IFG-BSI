package br.ifg.pw.rest;

import br.ifg.pw.model.bo.LoginBO;
import br.ifg.pw.model.dto.utils.LoginDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginController {


    @Inject
    LoginBO bo;

    @POST
    @Transactional
    public Response login(LoginDTO dto) {
        return bo.validarUsuario(dto);
    }


}
