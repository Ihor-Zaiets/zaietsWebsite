delete from lang_content where key_id = (select id from lang_key where key = 'my_name');
delete from lang_key where key = 'my_name';

update lang_key set key = 'landing_page.myname' where key = 'home.myname';
update lang_key set key = 'landing_page.title' where key = 'home.title';
