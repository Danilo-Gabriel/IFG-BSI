package br.ifg.pw.rest;

import br.ifg.pw.model.bo.TriagemTesteBO;
import br.ifg.pw.model.dto.triagemTeste.RegistraTriagemDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Path("/triagemteste")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TriagemController {


    @Inject
    TriagemTesteBO bo;
    // Método para salvar ou atualizar uma triagem

    @POST
    @Transactional

    public Response salvar(RegistraTriagemDTO dto) {
        return bo.salvartriagem(dto);
    }



    @GET
    public Response listar() {
        return bo.listar();
    }



//    @DELETE
//    @Transactional
//    @Path("{idUsuario}")
//    public Response delete(@PathParam("idUsuario") Long id){
//        return bo.remover(idUsuario);
//    }
}
