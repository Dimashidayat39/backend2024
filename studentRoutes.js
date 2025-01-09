const express = require('express');
const { body } = require('express-validator');
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

const router = express.Router();

router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.post(
  '/students',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('age').isInt().withMessage('Age must be an integer'),
    body('major').notEmpty().withMessage('Major is required'),
  ],
  createStudent
);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

module.exports = router;
