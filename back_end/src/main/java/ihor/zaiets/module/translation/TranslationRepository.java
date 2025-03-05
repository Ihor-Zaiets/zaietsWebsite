package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Language;
import ihor.zaiets.entity.Translation;
import ihor.zaiets.module.translation.dto.TranslationKeyValueDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TranslationRepository extends JpaRepository<Translation, Long> {
    List<Translation> findAllByLanguage(Language language);

    @Query(value = "select new ihor.zaiets.module.translation.dto.TranslationKeyValueDTO(keyTable.translationKey, translationTable.translation) from Translation translationTable left join translationTable.translationKey keyTable where translationTable.language = (select l from Language l where l.languageCode = :languageCode)")
    List<TranslationKeyValueDTO> findTranslationsByLanguage(@Param("languageCode") String languageCode);
}
