const db = require('../db/connection');

class Employee {

  constructor(id, firstName, lastName, role, department, salary, manager) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.salary = salary;
    this.manager = manager;
  }

  viewAll() {
    const query = 'SELECT * FROM employee';
    return db.promise().query(query)
    .then( ([rows]) => {
      return rows;
    }); 
    }
  
  add(){
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)';
    const values = [this.firstName, this.lastName, this.role, this.manager];
    return db.promise().query(query, values)
  }
}

module.exports = {Employee}