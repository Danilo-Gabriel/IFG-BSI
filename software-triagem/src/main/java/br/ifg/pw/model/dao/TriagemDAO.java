package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.triagem.ListaTriagemDTO;
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
    public List<ListaTriagemDTO> findAllUsers() {
//        HQL        corigir o erro do importe dessa função
        String hql = "SELECT new br.ifg.pw.model.dto.triagem.ListaTriagemDTO(t.iduser, t.especialidade, t.resultado) " +
                "FROM Triagem t";

        return getEntityManager().createQuery(hql, ListaTriagemDTO.class).getResultList();
    }
}