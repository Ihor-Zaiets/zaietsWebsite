package ihor.zaiets.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "lang")
public class Language {
    @Id
    private Long id;

    @Column(name = "lang_code")
    private String languageCode;

    @Column(name = "lang_name")
    private String languageName;
}
