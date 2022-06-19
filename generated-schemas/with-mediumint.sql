set names utf8mb4;
set foreign_key_checks = 0;

create table `author` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;

create table `book` (`book_id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `author_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;
alter table `book` add index `book_author_id_index`(`author_id`);

alter table `book` add constraint `book_author_id_foreign` foreign key (`author_id`) references `author` (`id`) on update cascade;

set foreign_key_checks = 1;
