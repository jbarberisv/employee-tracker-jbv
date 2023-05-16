const inquirer = require ('inquirer');
const {Role} = require ('../Role.js')


const addEmployee = () => {
    let role = new Role();
    return role.viewAll()
    .then (roles => {
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
                    return {name: role.title, value: role.id};
                })
            }
        ])
    })
}


module.exports = {addEmployee};