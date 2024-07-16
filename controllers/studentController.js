const Student = require('../models/Student');
const Mentor = require('../models/Mentor');

// Create a new student
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Assign or change mentor for a student
exports.assignMentor = async (req, res) => {
    try {
        const { studentId, mentorId } = req.body;
        const student = await Student.findById(studentId);
        if (!student) return res.status(404).send('Student not found');

        student.mentor = mentorId;
        student.previousMentors.push(mentorId);
        await student.save();

        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Show previously assigned mentors for a student
exports.getPreviousMentors = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('previousMentors');
        if (!student) return res.status(404).send('Student not found');
        res.send(student.previousMentors);
    } catch (error) {
        res.status(400).send(error);
    }
};
