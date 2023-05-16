const db = require('../db/connection');

class Department {

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  viewAll() {
    const query = 'SELECT * FROM department';
    return db.promise().query(query)
    .then( ([rows]) => {
      return rows;
    }); 
    }
}
module.exports = {Department};