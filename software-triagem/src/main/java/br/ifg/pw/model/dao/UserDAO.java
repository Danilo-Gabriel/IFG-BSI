package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.user.ListarUsuarioDTO;
import br.ifg.pw.model.entity.User;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import javax.management.Query;
import java.util.List;

@ApplicationScoped
public class UserDAO implements PanacheRepositoryBase<User, Long> {


    public User findByEmail(String email) {
        return find("email", email).firstResult();
    }


    public List<ListarUsuarioDTO> findAllUsers() {

        HQL
        String hql = "select new br.ifg.pw.model.dto.user.ListarUsuarioDTO(u.id, u.nomeCompleto, u.telefone, u.endereco, u.email)" +
                "from User u";

        return getEntityManager().createQuery(hql, ListarUsuarioDTO.class).getResultList();
    }

}
