const express = require('express');
const { createStudent, assignMentor, getPreviousMentors } = require('../controllers/studentController');
const router = express.Router();

router.post('/', createStudent);
router.post('/assign-mentor', assignMentor);
router.get('/:id/previous-mentors', getPreviousMentors);

module.exports = router;
