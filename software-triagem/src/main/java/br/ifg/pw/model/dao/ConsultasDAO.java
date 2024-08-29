package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.consultas.ListarConsultasDTO;
import br.ifg.pw.model.entity.Consultas;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class ConsultasDAO implements PanacheRepositoryBase<Consultas, Long> {

//    aqui lista todas as consultas da tabela consulta

    public List<ListarConsultasDTO> findAllConsultas() {
//        HQL   corrigir o erro do import da funcionalidade
        String hql = "SELECT new br.ifg.pw.model.dto.consultas.ListarConsultasDTO(c.idusers, c.especialidade, c.local, c.data, c.hora, c.status) " +
                "FROM Consultas c";

        return getEntityManager().createQuery(hql, ListarConsultasDTO.class).getResultList();
    }
}