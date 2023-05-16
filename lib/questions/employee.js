const inquirer = require('inquirer');
const { Role } = require('../Role.js');
const { Employee } = require('../Employee.js');

const addEmployee = () => {
    let role = new Role();
    return role.viewAll()
        .then(roles => {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Insert the first name of the Employee you want to add.',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Insert the last name of the Employee you want to add.',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Assign a role to your new Employee',
                    choices: roles.map(role => {
                        return role.id + ' ' + role.title;
                    })
                }
            ])
        })
        .then(({ firstName, lastName, role }) => {
            let [roleId] = role.split(' ');
            let employee = new Employee(null, firstName, lastName, roleId, 1);
            return employee.add()
                .then(() => console.log(`new employee added: ${firstName}`))
        });
}

module.exports = {addEmployee};
