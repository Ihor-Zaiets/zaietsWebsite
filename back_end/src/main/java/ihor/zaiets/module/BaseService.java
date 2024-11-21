package ihor.zaiets.module;

import ihor.zaiets.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class BaseService<T, ID, DAO extends JpaRepository<T, ID>> {

    @Autowired
    protected DAO dao;

    public T saveEntity(T t) {
        return dao.save(t);
    }

    public T findById(ID id) {
        return dao.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public void deleteById(ID id) {
        dao.deleteById(id);
    }

    public List<T> findAll() {
        return dao.findAll();
    }
}
