const db = require('../config/database');

class Student {
  static findAll(callback) {
    db.query('SELECT * FROM students', callback);
  }

  static findById(id, callback) {
    db.query('SELECT * FROM students WHERE id = ?', [id], callback);
  }

  static create(data, callback) {
    const query = 'INSERT INTO students (name, age, major) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.age, data.major], callback);
  }

  static update(id, data, callback) {
    const query = 'UPDATE students SET name = ?, age = ?, major = ? WHERE id = ?';
    db.query(query, [data.name, data.age, data.major, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM students WHERE id = ?', [id], callback);
  }
}

module.exports = Student;
