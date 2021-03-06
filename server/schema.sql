DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;

USE todo_list;

CREATE TABLE responsible (
  idResponsible INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)
);

CREATE TABLE todos (
  idTodos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(120),
  idResponsible INT,
  FOREIGN KEY (idResponsible) REFERENCES responsible(idResponsible)
);

/*SQL: mysql -> ORM sequalize
NOSQL: mongoDB -> ORM mongoose
SERVER: express
FRONTEND: angularjs
STUDY: axios, promises*/