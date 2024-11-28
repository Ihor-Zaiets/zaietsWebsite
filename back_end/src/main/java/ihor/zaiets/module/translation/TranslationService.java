package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Translation;
import ihor.zaiets.module.BaseService;
import ihor.zaiets.module.language.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class TranslationService extends BaseService<Translation, Long, TranslationRepository> {

    @Autowired
    private LanguageService languageService;

    public Map<String, String> getTranslationsForLanguage(String languageCode) {
        return this.dao.findTranslationsByLanguage(languageCode);
    }
}
