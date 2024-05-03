const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        StudentName:{
            require: true,
            type: String,
        },
        StudentEmail:{
            require: true,
            type: String,
        },
        Password:{
            require: true,
            type: String,
        }
    },
    {
        collection: 'Student'
    }
)

module.exports = mongoose.model('Student', StudentSchema)