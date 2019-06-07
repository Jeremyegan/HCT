SELECT t.task, t.completed, s.show_name, i.item_name, e.first_name, e.last_name 
FROM worklog w
	INNER JOIN task t ON t.task_id=w.task_id
	INNER JOIN show s ON s.show_id=w.show_id
	INNER JOIN item i ON i.item_id=w.item_id
	INNER JOIN employee e ON e.employee_id=w.employee_id
WHERE e.email IN ( $1 );
    