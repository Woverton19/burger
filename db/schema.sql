CREATE DATABASE burgers_db;

Use burgers_db;

CREATE TABLE burgers

(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
mydatetime datetime,
PRIMARY KEY (id)
);