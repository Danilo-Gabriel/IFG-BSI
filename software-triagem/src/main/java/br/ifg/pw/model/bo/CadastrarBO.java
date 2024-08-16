package br.ifg.pw.model.bo;

import br.ifg.pw.model.dto.CadastroDto;
import br.ifg.pw.model.entity.CadastrarEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import java.util.Optional;

@ApplicationScoped
public class CadastrarBO {

    @PersistenceContext
    EntityManager entityManager;

    public CadastrarEntity cadastrar(CadastroDto cadastroDto) {
        // Validação do email: verifica se já existe um usuário com o email informado
        Optional<CadastrarEntity> usuarioExistente = encontrarUsuarioPorEmail(cadastroDto.getEmail());

        if (usuarioExistente.isPresent()) {
            // Se o email já existir, lança uma exceção ou retorna uma mensagem de erro
            throw new RuntimeException("Email já cadastrado!");
            // Ou: return "Email já cadastrado!";
        } else {
            // Cria a entidade CadastrarEntity a partir do DTO
            CadastrarEntity cadastrarEntity = new CadastrarEntity();
            cadastrarEntity.setFullName(cadastroDto.getFullName());
            cadastrarEntity.setPhone(cadastroDto.getPhone());
            cadastrarEntity.setAddress(cadastroDto.getAddress());
            cadastrarEntity.setBirthDate(cadastroDto.getBirthDate());
            cadastrarEntity.setEmail(cadastroDto.getEmail());
            cadastrarEntity.setPassword(cadastroDto.getPassword());

            // Salva a entidade no banco de dados
            entityManager.persist(cadastrarEntity);

            return cadastrarEntity;
        }
    }

    // Método para encontrar um usuário pelo email
    private Optional<CadastrarEntity> encontrarUsuarioPorEmail(String email) {
        TypedQuery<CadastrarEntity> query = entityManager.createQuery(
                "SELECT u FROM CadastrarEntity u WHERE u.email = :email", CadastrarEntity.class);
        query.setParameter("email", email);
        return query.getResultStream().findFirst();
    }
}