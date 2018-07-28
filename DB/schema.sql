DROP DATABASE IF EXISTS 'tree_viewDB';
CREATE DATABASE 'tree_viewDB';

USE 'tree_viewDB';

CREATE TABLE branches (
    branch_id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(75) NOT NULL,
    min_range INT,
    max_range INT,
    children INT,
    PRIMARY KEY (branch_id)
);

CREATE TABLE leaves (
    leaf_id int NOT NULL,
    `name` INT,
    branch_id INT,
    PRIMARY KEY (leaf_id),
    FOREIGN KEY (branch_id) REFERENCES branches (branch_id)
);

