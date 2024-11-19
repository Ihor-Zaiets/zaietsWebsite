CREATE OR REPLACE PROCEDURE create_translation(
    p_key VARCHAR,
    p_english_translation VARCHAR,
    p_polish_translation VARCHAR,
    p_russian_translation VARCHAR,
    p_ukrainian_translation VARCHAR
)
    LANGUAGE plpgsql AS $$
DECLARE
    english_lang_id INT;
    polish_lang_id INT;
    russian_lang_id INT;
    ukrainian_lang_id INT;
    v_key_id INT; -- To avoid ambiguity with column names
BEGIN
    -- Ensure the English language exists in the 'lang' table
    SELECT id INTO english_lang_id FROM public.lang WHERE lang_code = 'en';
    IF english_lang_id IS NULL THEN
        INSERT INTO public.lang (lang_code, lang_name) VALUES ('en', 'english') RETURNING id INTO english_lang_id;
    END IF;

    -- Ensure the Polish language exists in the 'lang' table
    SELECT id INTO polish_lang_id FROM public.lang WHERE lang_code = 'pl';
    IF polish_lang_id IS NULL THEN
        INSERT INTO public.lang (lang_code, lang_name) VALUES ('pl', 'polski') RETURNING id INTO polish_lang_id;
    END IF;

    -- Ensure the Russian language exists in the 'lang' table
    SELECT id INTO russian_lang_id FROM public.lang WHERE lang_code = 'ru';
    IF russian_lang_id IS NULL THEN
        INSERT INTO public.lang (lang_code, lang_name) VALUES ('ru', 'русский') RETURNING id INTO russian_lang_id;
    END IF;

    -- Ensure the Ukrainian language exists in the 'lang' table
    SELECT id INTO ukrainian_lang_id FROM public.lang WHERE lang_code = 'ua';
    IF ukrainian_lang_id IS NULL THEN
        INSERT INTO public.lang (lang_code, lang_name) VALUES ('ua', 'yкраїнська') RETURNING id INTO ukrainian_lang_id;
    END IF;

    -- Ensure the key exists in the 'lang_key' table
    SELECT id INTO v_key_id FROM public.lang_key WHERE key = p_key;
    IF v_key_id IS NULL THEN
        INSERT INTO public.lang_key (key) VALUES (p_key) RETURNING id INTO v_key_id;
    END IF;

    -- Insert or update the English translation
    INSERT INTO public.lang_content (lang_id, key_id, lang_content)
    VALUES (english_lang_id, v_key_id, p_english_translation)
    ON CONFLICT (lang_id, key_id) DO UPDATE
        SET lang_content = EXCLUDED.lang_content;

    -- Insert or update the Polish translation
    INSERT INTO public.lang_content (lang_id, key_id, lang_content)
    VALUES (polish_lang_id, v_key_id, p_polish_translation)
    ON CONFLICT (lang_id, key_id) DO UPDATE
        SET lang_content = EXCLUDED.lang_content;

    -- Insert or update the Russian translation
    INSERT INTO public.lang_content (lang_id, key_id, lang_content)
    VALUES (russian_lang_id, v_key_id, p_russian_translation)
    ON CONFLICT (lang_id, key_id) DO UPDATE
        SET lang_content = EXCLUDED.lang_content;

    -- Insert or update the Ukrainian translation
    INSERT INTO public.lang_content (lang_id, key_id, lang_content)
    VALUES (ukrainian_lang_id, v_key_id, p_ukrainian_translation)
    ON CONFLICT (lang_id, key_id) DO UPDATE
        SET lang_content = EXCLUDED.lang_content;
END;
$$;
