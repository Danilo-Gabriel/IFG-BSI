package br.ifg.pw;

import br.ifg.pw.model.bo.CadastrarBO;
import br.ifg.pw.model.dto.CadastroDto;
import br.ifg.pw.model.entity.CadastrarEntity;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/cadastrar")
@Consumes(MediaType.APPLICATION_JSON)
public class CadastrarResource {

    @Inject
    CadastrarBO cadastrarBO;

    @POST
    @Produces(MediaType.APPLICATION_JSON) // Correção: A anotação @Produces agora está no método
    public CadastrarEntity cadastrar(CadastroDto cadastroDto) {
        return cadastrarBO.cadastrar(cadastroDto);
    }
}