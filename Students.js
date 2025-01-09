const db = require('../config/database');

class Student {
  static create(data, callback) {
    const query = 'INSERT INTO students (name, age, major) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.age, data.major], callback);
  }
}

module.exports = Student;
