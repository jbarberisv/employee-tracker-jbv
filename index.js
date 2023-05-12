const inquirer = require ('inquirer');
const Department = require('./lib/Department')
const start = () => {
    let department = new Department;
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
    .then((menu)=> {
        if (menu === 'View All Departments') {
            department.viewAll();
        }
    })
    
}

start();