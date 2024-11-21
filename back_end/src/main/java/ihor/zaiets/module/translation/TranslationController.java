package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Translation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/translation")
public class TranslationController {

    @Autowired
    private TranslationService translationService;

    @GetMapping("/{languageCode}")
    public ResponseEntity<List<Translation>> getTranslationsForLanguage(@PathVariable("languageCode") String languageCode) {
        return ResponseEntity.ok(translationService.getTranslationsForLanguage(languageCode));
    }
}
