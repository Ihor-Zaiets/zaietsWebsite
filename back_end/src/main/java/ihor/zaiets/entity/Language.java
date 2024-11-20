package ihor.zaiets.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Language {
    @Id
    private Long id;

    private String languageCode;

    private String languageName;
}
