package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.consulta.ListarConsultasDTO;
import br.ifg.pw.model.entity.Consulta;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class ConsultaDAO implements PanacheRepositoryBase<Consulta, Long> {

    //HQL
    public List<ListarConsultasDTO> findAllConsultas() {
        String hql = "select new br.ifg.pw.model.dto.consulta.ListarConsultasDTO(c.id, c.paciente, c.especialidade, c.local, c.date, c.status, c.time) " +
                "from Consulta c";

        return getEntityManager().createQuery(hql,ListarConsultasDTO.class).getResultList();
    }
}