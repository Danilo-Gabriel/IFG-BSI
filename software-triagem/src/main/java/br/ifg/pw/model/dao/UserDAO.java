package br.ifg.pw.model.dao;

import br.ifg.pw.model.entity.User;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

public class UserDAO implements PanacheRepositoryBase<User, Long> {
}
