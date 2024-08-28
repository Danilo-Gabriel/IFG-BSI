package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.triagem.ListarTriagemDTO;
import br.ifg.pw.model.entity.Triagem;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class TriagemDAO implements PanacheRepositoryBase<Triagem, Long> {

    public List<Triagem> findByUserId(int userId) {
        return find("idUsuario", userId).list();
    }


    //  observação Método para listar apenas id do usuário, especialidade e resultado
    public List<ListarTriagemDTO> findAllUsers() {
        HQL
        String hql = "SELECT new br.ifg.pw.model.dto.triagem.ListarTriagemDTO(t.idUsuario, t.especialidade, t.resultado) " +
                "FROM Triagem t";

        return getEntityManager().createQuery(hql, ListarTriagemDTO.class).getResultList();
    }
}