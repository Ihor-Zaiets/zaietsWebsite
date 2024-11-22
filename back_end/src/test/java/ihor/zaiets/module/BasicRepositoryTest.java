package ihor.zaiets.module;

import ihor.zaiets.entity.IEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.jpa.repository.JpaRepository;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public abstract class BasicRepositoryTest <T extends IEntity, DAO extends JpaRepository<T, Long>> {

    @Autowired
    protected DAO dao;

    public abstract T createEntity();

    @Test
    public void testSaveAndFindById() {
        T savedEntity = this.dao.save(createEntity());

        assertNotNull(savedEntity.getId());
        assertTrue(dao.findById(savedEntity.getId()).isPresent());
    }

    @Test
    public void testDeleteById() {
        T savedEntity = this.dao.save(createEntity());
        this.dao.deleteById(savedEntity.getId());
        assertFalse(this.dao.findById(savedEntity.getId()).isPresent());
    }

    @Test
    public abstract void testUpdate();
}
