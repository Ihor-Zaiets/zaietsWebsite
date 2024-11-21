package ihor.zaiets.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "lang")
public class Language extends IEntity {

    @Column(name = "lang_code")
    private String languageCode;

    @Column(name = "lang_name")
    private String languageName;
}
