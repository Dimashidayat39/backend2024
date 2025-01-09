const express = require('express');
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/StudentController');

const router = express.Router();

// Routes
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.post('/students', addStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
