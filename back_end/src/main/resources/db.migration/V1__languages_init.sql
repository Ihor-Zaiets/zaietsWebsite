CREATE TABLE public.lang (
    id serial primary key,
    lang_code varchar not null unique,
    lang_name varchar not null unique
);

create table public.lang_key (
    id serial primary key,
    key varchar not null unique
);

create table public.lang_content (
    id serial primary key,
    lang_id int,
    key_id int,
    lang_content varchar,
    constraint fk_lang foreign key (lang_id) references public.lang(id),
    constraint fk_key foreign key (key_id) references public.lang_key(id),
    unique (lang_id, key_id)
);

insert into public.lang (lang_code, lang_name) values ('en', 'english');
insert into public.lang (lang_code, lang_name) values ('pl', 'polski');
insert into public.lang (lang_code, lang_name) values ('ru', 'русский');
insert into public.lang (lang_code, lang_name) values ('ua', 'українська');
