INSERT INTO department (name)
VALUES
('Sales'),
('Accountant'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 15000, 1),
('Sales Person', 50000, 1),
('Accountant', 450000, 2);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Fabiola', 'Valenzuela', 1, NULL),
('Joaquin', 'Barberis', 2, 1),
('Gaspar', 'Barberis', 3, 1);