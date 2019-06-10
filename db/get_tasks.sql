select t.task, t.completed, t.notes, i.style, i.item_id, i.gender, i.time_period, i.color, i.size, s.show_name, e.first_name, e.last_name
from worklog w
join show s on s.show_id = w.show_id
join item i on i.item_id = w.item_id
join employee e on e.employee_id = w.employee_id
join task t on t.task_id = w.task_id;