CREATE DATABASE IF NOT EXISTS mailing;

USE mailing;

CREATE TABLE IF NOT EXISTS mailing (
    firstname VARCHAR(20),
    lastname VARCHAR(30),
    email VARCHAR(50),
    street VARCHAR(150),
    zip INT(10)
);

CREATE TABLE IF NOT EXISTS zip (
    zip INT(10) PRIMARY KEY,
    city VARCHAR(30),
    state VARCHAR(20)
);

SELECT mailing.firstname, mailing.lastname, mailing.street, zip.city, zip.state, zip.zip 
FROM mailing, zip WHERE mailing.zip = zip.zip;

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




