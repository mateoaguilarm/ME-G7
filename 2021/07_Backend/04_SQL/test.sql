-- SE CREA UNA TABLA

CREATE TABLE test (
	id		integer,
	name	varchar(40),
	age		integer
);


-- SE INSERTAN DATOS DENTRO DE LA TABLA

INSERT INTO test VALUES (1, 'theName', 123);
INSERT INTO test VALUES (2, 'Mateo', 18);
INSERT INTO test VALUES (3, 'Julia', 23);
INSERT INTO test VALUES (4, 'Nicole', 34);
INSERT INTO test VALUES (5, 'Emma', 13);
INSERT INTO test VALUES (6, 'Vale', 23);
INSERT INTO test VALUES (7, 'Juan', 13);


-- SE PUEDE VISUALIZAR CON EL COMANDO "SELECT" LO QUE SE REQUIERE

SELECT * FROM test WHERE age > 17
SELECT * FROM test WHERE age < 17