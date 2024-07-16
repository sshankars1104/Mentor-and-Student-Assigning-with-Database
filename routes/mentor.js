const express = require('express');
const { createMentor, assignStudents, getStudentsForMentor } = require('../controllers/mentorController');
const router = express.Router();

router.post('/', createMentor);
router.post('/assign', assignStudents);
router.get('/:id/students', getStudentsForMentor);

module.exports = router;
