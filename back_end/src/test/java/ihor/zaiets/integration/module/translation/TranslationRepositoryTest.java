package ihor.zaiets.integration.module.translation;

import ihor.zaiets.entity.Translation;
import ihor.zaiets.integration.BasicRepositoryTest;
import ihor.zaiets.module.translation.TranslationRepository;

public class TranslationRepositoryTest extends BasicRepositoryTest<Translation, TranslationRepository> {

    @Override
    public Translation createEntity() {
        return new Translation();
    }

    @Override
    public void testUpdate() {

    }
}
