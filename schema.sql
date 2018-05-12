CREATE DATABASE IF NOT EXISTS merchandise;

USE merchandise;

CREATE TABLE IF NOT EXISTS shirts (
    id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    color VARCHAR(20),
    size VARCHAR(10),
    qty INT(10),
    cost INT(10)
);

CREATE TABLE IF NOT EXISTS tour (
    date VARCHAR(10),
    venue VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(20)
)





