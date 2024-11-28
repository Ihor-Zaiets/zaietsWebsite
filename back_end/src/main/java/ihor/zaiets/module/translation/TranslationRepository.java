package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Language;
import ihor.zaiets.entity.Translation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface TranslationRepository extends JpaRepository<Translation, Long> {
    List<Translation> findAllByLanguage(Language language);

    @Query(value = "select lk.key, lc.lang_content from lang_content lc left join lang_key lk on lc.key_id = lk.id where lc.lang_id = (select l.id from lang l where lang_code = :languageCode)", nativeQuery = true)
    Map<String, String> findTranslationsByLanguage(String languageCode);
}
