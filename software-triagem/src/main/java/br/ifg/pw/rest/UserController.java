package br.ifg.pw.rest;


import br.ifg.pw.model.bo.UserBO;
import br.ifg.pw.model.dto.UserDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserController {


    @Inject
    UserBO bo;


    @POST
    @Transactional
    public Response create(UserDTO user) {

        try {
            this.bo.registerUsuario(user);
            return Response.ok().build();
        }catch (Exception e){

            return Response.serverError().entity(e.getMessage()).build();
        }

    }

}
