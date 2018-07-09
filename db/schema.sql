/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/


 -- create database for grocery_list app only it it doesn't exist
DROP DATABASE IF EXISTS grocery_list;
CREATE DATABASE grocery_list;
USE grocery_list;



CREATE TABLE groceries (
	id int NOT NULL AUTO_INCREMENT, 
	name varchar(255) NOT NULL, 
	quantity smallint NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO groceries (name, quantity) VALUES ('chocolate', 10);