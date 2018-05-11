USE mailing;

INSERT INTO zip (zip, city, state)
VALUES (17101,'Harrisburg','Pennsylvania'),
(10001,'New York','New York'),
(23081,'Williamsburg','Virginia');
INSERT INTO mailing (firstname, lastname, email, street, vip)
VALUES ('John','Smith','jonsmith@example.com','1200 East Ave','10001'),
('Fred','Astair','dancer@example.com','200 Colonial Road',23081), 
('Ginger','Rogers','hotdance@example.com','300 Olde Ave', 17101);

USE tour;

INSERT INTO tour (date, venue, city, state)
VALUES ("1.17.14","BOMBAY","VENTURA", "CA"),
("9.20.14","BOMBAY","VENTURA", "CA"),
("4.20.15","SLIDEBAR","FULLERTON", "CA"),
("8.10.15","DIPIAZZAS","LONG BEACH", "CA"),
("8.14.15","LANCASTER MOOSE LODGE","LANCASTER", "CA"),
("9.24.15","PROGRAMME","FULLERTON", "CA"),
("9.25.15","BONNERHAUS","NORTH HOLLYWOOD","CA"),
("4.16.16","LA DOLCE VITA","OXNARD", "CA"),
("12.28.16","4TH ST VINE","LONG BEACH", "CA")

