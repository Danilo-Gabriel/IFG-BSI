package br.ifg.pw.model.dao;


import br.ifg.pw.model.entity.CadastrarEntity;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;


@ApplicationScoped
public class CadastrarDAO {

    @Inject
    cadastrarRepository cadastrarRepository;

    // Métodos para CRUD (Create, Read, Update, Delete)
    // Exemplo:
    public CadastrarEntity findById(Long id) {
        return cadastrarRepository.findById(id);
    }
}

