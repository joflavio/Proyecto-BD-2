
DROP TABLE testtbl; 
CREATE TABLE testtbl ( campo1 INT NOT NULL, campo2 VARCHAR(45) NOT NULL, PRIMARY KEY (campo1)); 
INSERT INTO testtbl (campo1, campo2) VALUES (1, 'Pueba1'); 
UPDATE testtbl SET campo2='Prueba1' WHERE campo1=1;
SELECT * FROM testtbl;

START TRANSACTION;
UPDATE testtbl SET campo2='Prueba2' WHERE campo1=1;
COMMIT;

START TRANSACTION;
UPDATE testtbl SET campo2='Prueba2' WHERE campo1=1;
ROLLBACK;

CREATE USER flavio@'%' IDENTIFIED BY 'abc12345';
GRANT ALL PRIVILEGES ON testdb.* TO flavio@'%' ;
REVOKE SELECT ON testdb.* FROM flavio@'%';
SHOW GRANTS FOR flavio@'%';
DROP USER flavio@'%';