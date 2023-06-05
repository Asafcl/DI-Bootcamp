SELECT first_name AS "first", last_name AS "last" FROM employees

SELECT DISTINCT department_id FROM employees

SELECT * FROM employees ORDER BY first_name DESC

SELECT first_name, last_name, salary, TRUNC(salary*0.15) AS PF FROM employees

SELECT first_name, last_name, round(salary) FROM employees ORDER BY salary ASC

SELECT ROUND(sum(salary)) FROM employees

SELECT max(salary), MIN(salary) FROM employees

SELECT ROUND(avg(salary)) FROM employees

SELECT count(*) FROM employees

SELECT UPPER(first_name) FROM employees

SELECT LEFT(first_name,3) FROM employees

SELECT CONCAT(first_name,' ', last_name) FROM employees

SELECT first_name, last_name, LENGTH(CONCAT(first_name,last_name)) FROM employees

SELECT first_name FROM employees WHERE first_name ~ '[0-9]'

SELECT * FROM employees LIMIT 10

--PART 2

SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000

SELECT first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31'

SELECT * FROM employees WHERE first_name iLIKE '%e%c%' OR first_name ILIKE '%c%e%' 

SELECT * FROM employees 
	LEFT JOIN jobs ON employees.job_id = jobs.job_id
	WHERE jobs.job_title= 'Programmer' OR jobs.job_title ='shiping Clerk'
	AND employees.salary != 4500
	AND employees.salary != 10000
	AND employees.salary != 15000
	
SELECT last_name FROM employees WHERE LENGTH(last_name)= 6

SELECT last_name FROM employees WHERE POSITION('e' IN last_name)=3

SELECT DISTINCT job_title FROM employees 
LEFT JOIN jobs ON employees.job_id =jobs.job_id

SELECT * from employees WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford')	