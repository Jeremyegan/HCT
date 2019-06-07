INSERT INTO employee (
    first_name,
    last_name,
    email,
    hash,
    admin
) VALUES (
    $1,
    $2,
    $3,
    $4,
    'false'
)

RETURNING first_name, last_name, email, employee_id;