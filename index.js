const inquirer = require ('inquirer');
const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Roles',
                'View All Departments',
                'Add Department',
            ],
        }
    ])
    
}

start();