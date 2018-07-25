DROP DATABASE IF EXISTS 'tree_view';
CREATE DATABASE 'tree_view';

USE 'tree_view';

CREATE TABLE branches (
    branch_id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(75) NOT NULL,
    min_range INT,
    max_range INT,
    children INT,
    PRIMARY_KEY (branch_id)
);

CREATE TABLE leaves (
    branch_id int NOT NULL,
    rand_num INT
);

