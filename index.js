const inquirer = require ('inquirer');
// const table = require ('console.table')
const {Department} = require('./lib/Department');
const {addEmployee} = require('./lib/questions/employee');

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
    .then((option)=> {
        switch (option.menu) {
            case 'View All Departments':
                return department.viewAll();
            case 'Add Employee':
                addEmployee();
            default:
                break;
        }
    })
    .then ((rows)=>{
        console.table(rows);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
    
    
    
}

start();
