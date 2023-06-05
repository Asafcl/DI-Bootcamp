SELECT first_name,last_name,birthdate FROM students
ORDER BY last_name ASC LIMIT 4

SELECT first_name, last_name, birthdate
FROM students
WHERE birthdate = (SELECT MAX(birthdate) FROM students)

SELECT first_name, last_name, birthdate FROM students
OFFSET 2 LIMIT 3