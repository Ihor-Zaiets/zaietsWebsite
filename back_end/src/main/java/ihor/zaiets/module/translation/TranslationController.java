package ihor.zaiets.module.translation;

import ihor.zaiets.module.translation.dto.TranslationKeyValueDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/translation")
public class TranslationController {

    @Autowired
    private TranslationService translationService;

    @GetMapping("/{languageCode}")
    public ResponseEntity<List<TranslationKeyValueDTO>> getTranslationsForLanguage(@PathVariable("languageCode") String languageCode) {
        return ResponseEntity.ok(translationService.getTranslationsForLanguage(languageCode));
    }
}
