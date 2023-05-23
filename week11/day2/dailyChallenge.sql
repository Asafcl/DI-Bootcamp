CREATE TABLE actors(id SERIAL primary key,
			 first_name varchar(30) NOT NULL,
			 last_name varchar(30) NOT NULL,
			  date_birthday date NOT NULL,
			  number_oscars varchar(30) NOT NULL
			 )
			 
INSERT INTO actors (first_name,last_name,date_birthday,number_oscars)
VALUES('Marlon', 'Brando','1924/04/03',2),
		('Anthony', 'Hopkins','1937/12/31',1),
		('Jodie','Foster','1962/11/19',2),
		 ('Tom','Hanks','1956/07/09',2),
		 ('Meryl','Streep','1949/06/22',3)
		 
select * FROM actors
		 