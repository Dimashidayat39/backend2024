// Data array
let students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Information Systems' },
  ];
  
  // Get all students
  const getAllStudents = (req, res) => {
    res.json(students);
  };
  
  // Get student by ID
  const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find((s) => s.id === id);
  
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
  
    res.json(student);
  };
  
  // Add new student
  const addStudent = (req, res) => {
    const { name, age, major } = req.body;
  
    // Validate data
    if (!name || !age || !major) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const newStudent = {
      id: students.length + 1,
      name,
      age,
      major,
    };
  
    students.push(newStudent);
    res.status(201).json(newStudent);
  };
  
  // Update student by ID
  const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, major } = req.body;
  
    const studentIndex = students.findIndex((s) => s.id === id);
  
    if (studentIndex === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }
  
    // Update data
    students[studentIndex] = { id, name, age, major };
    res.json(students[studentIndex]);
  };
  
  // Delete student by ID
  const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex((s) => s.id === id);
  
    if (studentIndex === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }
  
    // Delete data
    students.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully' });
  };
  
  module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
  };
  