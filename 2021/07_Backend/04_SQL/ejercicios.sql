-- 1.
SELECT film_id, title FROM film

-- 2.
SELECT * FROM film LIMIT 5

-- 3.
SELECT * FROM film WHERE film_id < 4

-- 4.
SELECT * FROM film WHERE rating = 'PG' OR rating = 'G'

-- 5.
SELECT first_name FROM actor WHERE first_name IN (
	'Angela', 'Angelina', 'Audrey'
)

-- 6.
SELECT * FROM actor WHERE first_name IN (
	'Julia'
)

SELECT * FROM actor WHERE first_name = 'Julia'

-- 7.
SELECT * FROM actor WHERE first_name IN (
'Chris', 'Cameron', 'Cuba'
)

-- 8.
SELECT * FROM customer WHERE first_name = 'Jamie' AND last_name = 'Rice'

-- 9.
SELECT amount, payment_date FROM payment WHERE amount < 1

-- 10.
SELECT rental_date, return_date FROM rental     -- no esta completo

-- 11. 
SELECT * FROM city ORDER BY country_id, city

-- 12.
SELECT * FROM rental WHERE return_date IS NOT NULL ORDER BY return_date DESC LIMIT 3

-- 13.
SELECT COUNT (rating) FROM film WHERE rating = 'NC-17' OR rating = 'PG'
