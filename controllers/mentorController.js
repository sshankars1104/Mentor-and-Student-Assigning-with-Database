const Mentor = require('../models/Mentor');
const Student = require('../models/Student');

// Create a new mentor
exports.createMentor = async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Assign students to a mentor
exports.assignStudents = async (req, res) => {
    try {
        const { mentorId, studentIds } = req.body;
        const mentor = await Mentor.findById(mentorId);
        if (!mentor) return res.status(404).send('Mentor not found');

        const students = await Student.find({ _id: { $in: studentIds }, mentor: null });
        if (students.length !== studentIds.length) return res.status(400).send('Some students already have a mentor');

        students.forEach(student => {
            student.mentor = mentorId;
            student.previousMentors.push(mentorId);
        });

        await Promise.all(students.map(student => student.save()));

        mentor.students.push(...studentIds);
        await mentor.save();

        res.send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all students for a particular mentor
exports.getStudentsForMentor = async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.id).populate('students');
        if (!mentor) return res.status(404).send('Mentor not found');
        res.send(mentor.students);
    } catch (error) {
        res.status(400).send(error);
    }
};
