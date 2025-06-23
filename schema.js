const mongoose = require('mongoose');

// Schema for Course
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  instructor: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // in hours
    required: true,
    min: 1
  },
  isLive: {
    type: Boolean,
    default: false
  }
});

// Schema for Student
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/  // simple email regex
  },
  age: {
    type: Number,
    min: 15,
    max: 100
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  enrolledAt: {
    type: Date,
    default: Date.now
  }
});

// Export models
const Course = mongoose.model('Course', courseSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Course, Student };
git add .