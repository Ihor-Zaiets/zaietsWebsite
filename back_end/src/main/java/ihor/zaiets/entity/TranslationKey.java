package ihor.zaiets.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "lang_key")
public class TranslationKey {

    @Id
    private Long id;

    @Column(name = "key")
    private String translationKey;
}
