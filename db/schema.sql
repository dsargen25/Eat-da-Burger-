DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(35),
    devoured NOT NULL BOOLEAN,
    PRIMARY KEY (id)
 )