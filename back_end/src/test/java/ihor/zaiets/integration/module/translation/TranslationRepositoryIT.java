package ihor.zaiets.integration.module.translation;

import ihor.zaiets.entity.Translation;
import ihor.zaiets.integration.BasicRepositoryIT;
import ihor.zaiets.module.translation.TranslationRepository;

public class TranslationRepositoryIT extends BasicRepositoryIT<Translation, TranslationRepository> {

    @Override
    public Translation createEntity() {
        return new Translation();
    }

    @Override
    public void testUpdate() {

    }
}
