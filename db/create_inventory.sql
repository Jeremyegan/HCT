insert into item
(   
    gender,
    color,
    size,
    style
) values (
    $1,
    $2,
    $3,
    $4
);

select * from item