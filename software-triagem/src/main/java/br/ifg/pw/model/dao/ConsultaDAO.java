package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.consultas.ListarConsultasDTO;
import br.ifg.pw.model.entity.Consulta;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class ConsultaDAO implements PanacheRepositoryBase<Consulta, Long> {

    //HQL
    public List<ListarConsultasDTO> findAllConsulta() {
        // Corrigido o uso de JPQL e Panache para criar a consulta
        String hql = "select new br.ifg.pw.model.dto.consultas.ListarConsultasDTO(c.id, c.paciente, c.especialidade, c.local, c.date, c.time,c.status) " +
                "from Consulta c";

        return getEntityManager().createQuery(hql,ListarConsultasDTO.class).getResultList();
    }
}