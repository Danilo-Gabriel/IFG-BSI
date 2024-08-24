package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.utils.LoginDTO;
import br.ifg.pw.model.entity.User;
import io.quarkus.elytron.security.common.BcryptUtil;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.Response;



@ApplicationScoped
public class LoginBO {

    @Inject
    UserDAO dao;


    public Response validarUsuario(LoginDTO dto) {

        try {

            if(dto != null){
                User user = dao.findByEmail(dto.getEmail());
                if(user != null){

                    boolean valid =  BcryptUtil.matches(dto.getSenha(), user.getSenha());

                  if(valid){
                      return Response.ok().build();
                  }
                  else {
                      return Response.status(Response.Status.UNAUTHORIZED).build();
                  }
                }
                return Response.status(400).entity("Usuário não cadastrado!").build();
            }
            else {
                return Response.status(400).entity("Dados invalido!").build();
            }

        } catch (Exception e) {
            return Response.status(400).entity(e.getMessage()).build();
        }
    }
}
