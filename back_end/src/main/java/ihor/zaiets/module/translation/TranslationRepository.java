package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Language;
import ihor.zaiets.entity.Translation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TranslationRepository extends JpaRepository<Translation, Long> {
    List<Translation> findAllByLanguage(Language language);
}
