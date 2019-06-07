SELECT email, hash
FROM employee
WHERE email = $1;