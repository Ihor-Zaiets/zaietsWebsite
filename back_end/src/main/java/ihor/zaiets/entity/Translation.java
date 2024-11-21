package ihor.zaiets.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "lang_content")
public class Translation {
    @Id
    private Long id;

    @OneToOne
    @JoinColumn(name = "lang_id", referencedColumnName = "id")
    private Language language;

    @OneToOne
    @JoinColumn(name = "key_id", referencedColumnName = "id")
    private TranslationKey translationKey;

    @Column(name = "lang_content")
    private String translation;
}
