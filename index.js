const express = require('express');
const mongoose = require('mongoose');
const { Course, Student } = require('./schema');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
  .then(() => console.log("DB Connected ✅"))
  .catch(err => console.log(err));

app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
