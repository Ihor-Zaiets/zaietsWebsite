package ihor.zaiets.integration.module.language;

import ihor.zaiets.entity.Language;
import ihor.zaiets.integration.BasicRepositoryIT;
import ihor.zaiets.module.language.LanguageRepository;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class LanguageRepositoryIT extends BasicRepositoryIT<Language, LanguageRepository> {

    @Test
    public void testUpdate() {
        String editedLanguageCode = "yy";
        String editedLanguageName = "testLanguageEdited";
        Language language = this.dao.save(createEntity());

        String languageCode = language.getLanguageCode();
        String languageName = language.getLanguageName();
        language.setLanguageCode(editedLanguageCode);
        language.setLanguageName(editedLanguageName);

        Language editedLanguage = this.dao.save(language);

        assertNotEquals(languageCode, editedLanguage.getLanguageCode());
        assertNotEquals(languageName, editedLanguage.getLanguageName());
        assertEquals(editedLanguage.getLanguageCode(), editedLanguageCode);
        assertEquals(editedLanguage.getLanguageName(), editedLanguageName);
    }

    @Override
    public Language createEntity() {
        Language language = new Language();
        language.setLanguageCode("xx");
        language.setLanguageName("testLanguage");
        return language;
    }
}
