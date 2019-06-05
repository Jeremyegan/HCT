insert into task (
    task,
    completed
) values (
    ${task},
    ${completed}
)
where task_id = task_id;

insert into employee (
    employee_id,
    first_name,
    last_name,
    admin,
    email,
    hash
) values (
    ${employee_id},
    ${first_name},
    ${last_name},
    ${admin},
    ${email},
    ${hash}
)
where employee_id = employee_id


insert into show (
    show_name
) values (
    ${show_name}
)
where show_id = show_id;


insert into item (
    item_name,
    gender,
    material_cost
) values (
    ${item_name},
    ${gender},
    ${material_cost}
)