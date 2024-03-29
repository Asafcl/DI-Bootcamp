SELECT * FROM customer

SELECT CONCAT_WS(' ',first_name,last_name) AS full_name FROM customer

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id,title,description, release_year,rental_rate FROM film ORDER BY rental_rate

SELECT address, phone FROM customer INNER JOIN address ON customer.address_id = address.address_id WHERE (district='Texas')

SELECT * FROM film WHERE (film_id=150 OR film_id=15)

SELECT film_id, title, description, length, rental_rate FROM film WHERE (title ILIKE 'airport%')

SELECT film_id, title, description, length, rental_rate FROM film WHERE (title ILIKE 'ai%')

SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 LIMIT 10

SELECT * FROM film ORDER BY rental_rate ASC FETCH FIRST 10 ROWS ONLY OFFSET 10 

SELECT payment.customer_id, first_name,last_name,amount,payment_date FROM customer INNER JOIN payment ON payment.customer_id = customer.customer_id ORDER BY customer_id

SELECT * FROM film LEFT JOIN inventory ON film.film_id =inventory.film_id WHERE inventory_id IS NULL

SELECT country, city.city FROM COUNTRY LEFT JOIN city ON city.country_id = country.country_id   

SELECT customer.customer_id, customer.first_name first_name,last_name, amount,payment_date, staff_id FROM payment INNER JOIN customer ON customer.customer_id=payment.customer_id ORDER BY staff_id ASC