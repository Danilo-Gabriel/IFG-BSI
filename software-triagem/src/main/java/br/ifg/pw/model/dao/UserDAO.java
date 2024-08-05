package br.ifg.pw.model.dao;

import br.ifg.pw.model.entity.User;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserDAO implements PanacheRepositoryBase<User, Long> {

}
