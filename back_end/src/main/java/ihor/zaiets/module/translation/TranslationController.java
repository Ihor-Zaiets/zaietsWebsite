package ihor.zaiets.module.translation;

import ihor.zaiets.entity.Translation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/translation")
public class TranslationController {

    @Autowired
    private TranslationService translationService;

    @GetMapping("/{languageCode}")
    public ResponseEntity<Map<String, String>> getTranslationsForLanguage(@PathVariable("languageCode") String languageCode) {
        return ResponseEntity.ok(translationService.getTranslationsForLanguage(languageCode));
    }
}
