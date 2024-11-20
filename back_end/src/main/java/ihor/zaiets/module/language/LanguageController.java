package ihor.zaiets.module.language;

import ihor.zaiets.entity.Language;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/language")
public class LanguageController {

    @Autowired
    private LanguageService languageService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Language>> getAllLanguages() {
        return ResponseEntity.ok(languageService.findAll());
    }
}
