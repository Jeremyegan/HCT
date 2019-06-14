select t.task, t.task_id, t.completed, t.notes, i.style, i.item_id, i.gender, i.time_period, i.color, i.size, s.show_name, s.show_id, e.employee_id, e.first_name, e.last_name, w.sew_time, w.pattern_time, w.cut_time, w.pull_time, w.alteration_time, w.repair_time, w.pull_boolean, w.repair_boolean
from worklog w
join show s on s.show_id = w.show_id
join item i on i.item_id = w.item_id
join employee e on e.employee_id = w.employee_id
join task t on t.task_id = w.task_id;