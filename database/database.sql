--Crear la base de datos:
CREATE DATABASE ng_games_db;

--Ejecutar la base de datos:
USE ng_games_db;

CREATE TABLE Games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE Games;

