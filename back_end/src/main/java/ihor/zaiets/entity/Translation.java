package ihor.zaiets.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Translation {
    @Id
    private Long id;

    @OneToOne
    private Language language;

    @OneToOne
    private TranslationKey translationKey;

    private String translation;
}
