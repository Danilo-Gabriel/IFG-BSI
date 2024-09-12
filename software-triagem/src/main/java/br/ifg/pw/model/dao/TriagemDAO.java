//package br.ifg.pw.model.dao;
//
//import br.ifg.pw.model.dto.triagem.ListaTriagemDTO;
//import br.ifg.pw.model.entity.Triagem;
//import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
//import jakarta.enterprise.context.ApplicationScoped;
//
//import java.util.List;
//
//@ApplicationScoped
//public class TriagemDAO implements PanacheRepositoryBase<Triagem, Long> {
//
//
////    ESSE ID USUARIO E UM METODO DE PEGAR O ID DO USUARIO QUE ESTA LOGADO, NAO SEI SE ESTA FUNCIONAL
////    public List<Triagem> findByIdUsuario(Long idUsuario) {
////        return find("idUsuario", idUsuario).list();
////    }
//
//    public List<ListaTriagemDTO> findAllTriagem() {
//        String hql = "select new br.ifg.pw.model.dto.triagem.ListaTriagemDTO(t.id, t.hipertensao, " +
//                "t.diabetico, t.febre, t.dor, t.intensidade, t.peso, t.mediaPonderada) " +
//                "from Triagems t";
//
//        return getEntityManager().createQuery(hql, ListaTriagemDTO.class).getResultList();
//    }
//
//}