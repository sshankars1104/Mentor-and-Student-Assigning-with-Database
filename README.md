### Mentor-Student Assigning with Database

This project is a simple application to manage mentors and students, where you can create mentors and students, assign students to mentors, and query information about the assignments.

#### Render com Link:

`https://mentor-and-student-assigning-with-c5o5.onrender.com`

### Endpoint Definitions

## endpoints and their typical definitions:

## 1.Create Mentor

Endpoint: POST /mentors
Purpose: Creates a new mentor with a specified name.
Example: `http://mentor-and-student-assigning-with-c5o5.onrender.com/mentors`
Body: { "name": "Mentor Name" }

## 2.Create Student

Endpoint: POST /students
Purpose: Creates a new student with a specified name.
Example: `http://mentor-and-student-assigning-with-c5o5.onrender.com/students`
Body: { "name": "Student Name" }

## 3.Assign Students to a Mentor

Endpoint: POST /mentors/assign
Purpose: Assigns multiple students to a mentor. Students who already have a mentor should not be included in the list.
Example: `http://mentor-and-student-assigning-with-c5o5.onrender.com/mentors/assign`
Body: { "mentorId": "mentor_id", "studentIds": ["student_id1", "student_id2"] }

## 4.Assign or Change Mentor for a Student

Endpoint: POST /students/assign-mentor
Purpose: Assigns or changes the mentor for a specific student.
Example: `http://mentor-and-student-assigning-with-c5o5.onrender.com/students/assign-mentor`
Body: { "studentId": "student_id", "mentorId": "mentor_id" }

## 5.Show All Students for a Particular Mentor

Endpoint: GET /mentors/:id/students
Purpose: Retrieves all students assigned to a specific mentor.
Example: `http://mentor-and-student-assigning-with-c5o5.onrender.com/mentors/<mentorId>/students`

## 6.Show Previously Assigned Mentor for a Student

Endpoint: GET /students/:id/previous-mentors
Purpose: Retrieves all previous mentors for a specific student.
Example: `http://mentor-and-student-assigning-with-c5o5.onrender.com/students/<studentId>/previous-mentors`

### Accessing Endpoints in Browser

Once your Node.js server is running locally, you can access these endpoints directly in your web browser. Simply replace http://localhost:5000 with your actual server URL.

## For example:

To create a mentor: `http://localhost:5000/mentors`

To create a student: `http://localhost:5000/students`

To assign students to a mentor: `http://localhost:5000/mentors/assign`

To assign or change mentor for a student: `http://localhost:5000/students/assign-mentor`

To show all students for a particular mentor: `http://localhost:5000/mentors/<mentorId>/students`

To show previously assigned mentors for a student: `http://localhost:5000/students/<studentId>/previous-mentors`

## Dependencies

1.express
2.mongoose
3.body-parser

### License

This project is licensed under the MIT License - see the LICENSE file for details.
