package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Translation;
import ihor.zaiets.module.BasicRepositoryTest;

public class TranslationRepositoryTest extends BasicRepositoryTest<Translation, TranslationRepository> {

    @Override
    public Translation createEntity() {
        return new Translation();
    }

    @Override
    public void testUpdate() {

    }
}
