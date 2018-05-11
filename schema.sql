CREATE DATABASE IF NOT EXISTS merchandise;

USE merchandise;

CREATE TABLE IF NOT EXISTS shirts (
    id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(20),
    color VARCHAR(20),
    size VARCHAR(10),
    qty INT(10),
    cost INT(10)
);





