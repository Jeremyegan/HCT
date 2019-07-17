SELECT email, first_name, last_name, employee_id, admin, hash
FROM employee
WHERE email = ${email};