package br.ifg.pw.model.dao;



import br.ifg.pw.model.entity.CadastrarEntity;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@ApplicationScoped
public class cadastrarRepository implements PanacheRepository<CadastrarEntity> {

    @PersistenceContext
    EntityManager entityManager;

    // Métodos para CRUD (Create, Read, Update, Delete)
}