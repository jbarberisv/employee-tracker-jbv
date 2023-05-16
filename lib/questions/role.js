const inquirer = require ('inquirer');
const Department = require ('../Department')

const addRole = () => {
    let department = new Department();
    return department.viewAll()
    .then (departments => {
        inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Insert title.',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter Salary.',
        },
        {
            type: 'list',
            name: 'department',
            message: 'Choose a Department for your Employee',
            choices: departments.map( (department)=> {
                {return department.id, department.name}
            })
        }
    ])
})
}

module.exports = {addRole};