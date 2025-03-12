package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Translation;
import ihor.zaiets.module.BaseService;
import ihor.zaiets.module.translation.dto.TranslationKeyValueDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TranslationService extends BaseService<Translation, Long, TranslationRepository> {

    public List<TranslationKeyValueDTO> getTranslationsForLanguage(String languageCode) {
        List<TranslationKeyValueDTO> translationsByLanguage = this.dao.findTranslationsByLanguage(languageCode);
        translationsByLanguage = translationsByLanguage.stream().peek(dto -> {
            if (dto.getValue() == null || dto.getValue().isBlank()) {
                String englishTranslation = this.dao.findEnglishTranslationByKey(dto.getKey());
                dto.setValue(englishTranslation);
            }
        }).collect(Collectors.toList());
        return translationsByLanguage;
    }
}
