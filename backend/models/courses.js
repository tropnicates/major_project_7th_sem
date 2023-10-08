const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const courseSchema = new mongoose.Schema({
    CourseId:{
        type: String,
    },
    CourseName : {
        type: String,
    },
    CourseCredit: {
        type: String,
    },
    Branch: {
        type: String
    },
    Semester: {
        type: String,
    },
    FacultyId: {
        type: String
    }
})

const courseObj = mongoose.model('courses',courseSchema)

module.exports = courseObj;
