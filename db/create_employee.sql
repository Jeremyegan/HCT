insert into employee (
    first_name,
    last_name,
    admin,
    email,
    hash
) values (
    ${first_name},
    ${last_name},
    ${admin},
    ${emai},
    ${hash}
)
where employee_id = ${employee_id}