INSERT INTO branches ( `name`, min_range, max_range, children)
VALUES ("Test Branch One", 0, 200, 10);

INSERT INTO leaves (`name`, branch_id)
VALUES (350, 1);