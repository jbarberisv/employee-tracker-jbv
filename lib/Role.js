const db = require('../db/connection');

class Role {

  constructor(id, title, salary, department_id, ) {
    this.id = id;
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
  }

  viewAll() {
    const query = 'SELECT * FROM role';
    return db.promise().query(query)
    .then( ([rows]) => {
      return rows;
    }); 
    }
}
module.exports = {Role};