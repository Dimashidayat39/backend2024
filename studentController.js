const Student = require('../models/Student');
const { validationResult } = require('express-validator');

const getAllStudents = (req, res) => {
  Student.findAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

const getStudentById = (req, res) => {
  const id = req.params.id;
  Student.findById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(results[0]);
  });
};

const createStudent = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, age, major } = req.body;
  Student.create({ name, age, major }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Student created!', studentId: result.insertId });
  });
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, age, major } = req.body;

  Student.update(id, { name, age, major }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json({ message: 'Student updated!' });
  });
};

const deleteStudent = (req, res) => {
  const id = req.params.id;

  Student.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json({ message: 'Student deleted!' });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
