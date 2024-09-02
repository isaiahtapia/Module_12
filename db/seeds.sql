INSERT INTO departments (department_name) VALUES
    ('Marketing'),
    ('Finance'),
    ('HR'),
    ('Software Development');

INSERT INTO roles (jobTitle, salary, department_id) VALUES
    ('Business Analyst', 95000, 1),
    ('Data Scientist', 75000, 1), 
    ('Accountant', 90000, 2),   
    ('HR Manager', 60000, 3),
    ('HR Director', 87000, 3),
    ('Software Engineer', 110000, 4); 
   
INSERT INTO employees (first_name, last_name, jobTitle_id, manager_id) VALUES
    ('Tony', 'Soprano', 5, 1),
    ('Christopher', 'Moltasanti', 4, 2),
    ('Paulie', 'Walnuts', 3, null),
    ('Meadow', 'Soprano', 1, null),
    ('Carmella', 'Soprano', 2, null),
    ('Peter', 'Parker', 6, null);