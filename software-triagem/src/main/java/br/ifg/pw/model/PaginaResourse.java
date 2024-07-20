package br.ifg.pw;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;




@Path("/pagina")
public class PaginaResource {

    @Inject
    Template paginaInicial;

    @Inject
    Template login;

    @Inject
    Template cadastrar;

    @Inject
    Template triagem;

    @Inject
    Template usuario;

    @GET
    @Path("PaginaInicial")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance paginaInicial() {
        return paginaInicial.instance();
    }

    @GET
    @Path("Login")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance login() {
        return login.instance();
    }

    @GET
    @Path("Cadastrar")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance cadastrar() {
        return cadastrar.instance();
    }

    @GET
    @Path("Triagem")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance triagem() {
        return triagem.instance();
    }

    @GET
    @Path("Usuario")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance usuario() {
        return usuario.instance();
    }
}
