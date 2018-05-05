USE mailing;

INSERT INTO zip (zip, city, state)
VALUES (17101,'Harrisburg','Pennsylvania'),
(10001,'New York','New York'),
(23081,'Williamsburg','Virginia');
INSERT INTO mailing (firstname, lastname, email, street, vip)
VALUES ('John','Smith','jonsmith@example.com','1200 East Ave','10001'),
('Fred','Astair','dancer@example.com','200 Colonial Road',23081), 
('Ginger','Rogers','hotdance@example.com','300 Olde Ave', 17101);

