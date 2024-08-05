package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.UserDTO;
import br.ifg.pw.model.entity.User;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.util.Date;


@ApplicationScoped
public class UserBO {

    @Inject
    UserDAO dao;

    @Transactional
    public void registerUsuario(UserDTO user){


        if(user != null){
            User userNew = new User();
            userNew.setEmail(user.getEmail());
            userNew.setSenha(user.getSenha());
            this.dao.persist(userNew);
        }



    }
}
