create or replace function check_en_translation_is_not_null()
returns trigger as $$
declare
    en_lang_id int;
begin
    select id into en_lang_id from lang where lang_code = 'en';

    if new.lang_id = en_lang_id and new.lang_content is null or trim(new.lang_content) = '' then
        raise exception 'lang_content cannot be null or empty, when lang_code is ''en''';
    end if;
    return new;
end
$$ language plpgsql;

create trigger enforce_en_lang_content_not_null
    before insert or update on lang_content
    for each row
    execute function check_en_translation_is_not_null();
