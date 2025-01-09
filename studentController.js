const Student = require('../models/Student');

const createStudent = (req, res) => {
  const { name, age, major } = req.body;

  Student.create({ name, age, major }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Student created!', studentId: result.insertId });
  });
};

module.exports = { createStudent };
