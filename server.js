const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mentorRoutes = require('./routes/mentor');
const studentRoutes = require('./routes/student');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mentor_student', {
    // No options needed
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
