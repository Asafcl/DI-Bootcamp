create table items(
id SERIAL PRIMARY KEY,
name varchar(40) NOT NULL,
price integer NOT NULL)

CREATE TABLE customers(
id SERIAL PRIMARY KEY,
name varchar(40) NOT NULL,
last_name varchar(40) NOT NULL)

INSERT INTO items (name, price)
VALUES ('Small Desk', 100),
		('Large Desk', 300),
		('Fan', 80)
		
INSERT INTO customers (name,last_name)
VALUES ('Greg','Jones'),
		('Sandra','Jones'),
		('Scott','Scott'),
		('Trevor','Green'),
		('Melanie','Johnson')
		
SELECT * FROM items

SELECT * FROM items WHERE price >80

select * From items WHERE price >= 80

SELECT * FROM customers WHERE last_name ='Smith'

SELECT * FROM customers WHERE last_name = 'Jones'

SELECT * FROM customers WHERE name !='Scott'

