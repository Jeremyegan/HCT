update task
set task = ${task}
where task_id = ${id};

update task
set completed = ${completed}
where task_id = ${id};

update task 
set notes = ${notes}
where task_id = ${id};
