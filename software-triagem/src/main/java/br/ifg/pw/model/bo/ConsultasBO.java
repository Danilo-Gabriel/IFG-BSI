package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.ConsultasDAO;
import br.ifg.pw.model.dto.user.ConsultasUsuarioDTO;
import br.ifg.pw.model.dto.user.ListarConsultasDTO;
import br.ifg.pw.model.entity.Consultas;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.util.List;


@ApplicationScoped
public class ConsultasBO {

    @Inject
    ConsultasDAO dao;

    @Transactional
    public Response save(ConsultasUsuarioDTO dto) {

//implementar uma logica se existe consultas a tabela
        public Response list() {

            List<ListarConsultasDTO> list = dao.findAllUsers();

            return Response.ok(list).build();
        }

    }
