update employees
set email= 'not available',comision_ptc = 0.10
where departament_id = 110


update employees
set email ='available'
where departments = 'contability'

update employees
set salary = 8000
where employee_id =105 and salary < 5000

update employees set email = 'available' from departments
where employees.department_id = departments.department_id and
departments.department_name = 'Accounting'


