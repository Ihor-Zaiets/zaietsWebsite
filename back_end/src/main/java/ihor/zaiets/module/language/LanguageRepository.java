package ihor.zaiets.module.language;

import ihor.zaiets.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Long> {

    Language findByLanguageCode(String languageCode);
}
