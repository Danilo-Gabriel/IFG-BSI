package br.ifg.pw.rest;

import br.ifg.pw.model.bo.LoginBO;
import br.ifg.pw.model.dto.utils.LoginDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;


@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginController {

    private static final Logger log = Logger.getLogger(String.valueOf(LoginController.class));
    @Inject
    LoginBO bo;

    @POST
    @Transactional
    public Response login(LoginDTO dto) {
        log.log(Level.WARNING, dto.getEmail());
        return bo.validarUsuario(dto);
    }

    @HEAD
    public Response head() {
        String cookieName = "usuario-logado";
        NewCookie cookie = new NewCookie(
                cookieName,
                null,
                "/",
                null,
                0,
                null,
                0,
                new Date(),
                true,
                false);
        return Response.ok().cookie(cookie).build();
    }



}
