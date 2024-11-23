package ihor.zaiets.unit;

import ihor.zaiets.entity.IEntity;
import ihor.zaiets.module.BaseService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.jpa.repository.JpaRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

/**
 * I don't know how to write tests for this class. Left for better times.
 * If BaseService is a mock, then real methods are not called. If BaseService is a Spy or real methods are called, then this.dao is null.
 * */
@ExtendWith(MockitoExtension.class)
public abstract class BaseServiceTest <T extends IEntity, DAO extends JpaRepository<T, Long>> {

    @Mock
    protected BaseService<T, Long, DAO> baseService;

    @Mock
    protected DAO dao;

    @Test
    @Disabled
    void testSaveEntity() {
        T entity = mock();
        T savedEntity = mock();
        when(dao.save(entity)).thenReturn(savedEntity);

        T returnedEntity = baseService.saveEntity(entity);
        verify(dao.save(entity), times(1));
        assertEquals(returnedEntity, savedEntity);
    }

    @Test
    @Disabled
    void findById() {

    }

    @Test
    @Disabled
    void deleteById() {

    }

    @Test
    @Disabled
    void findAll() {

    }
}
