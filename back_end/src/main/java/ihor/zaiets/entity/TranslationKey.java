package ihor.zaiets.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class TranslationKey {

    @Id
    private Long id;

    private String translationKey;
}
