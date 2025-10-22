const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((error) => {
    console.log(error);})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: Number,
  email: String
});

const Student = mongoose.model('Student', studentSchema);


app.get('/api/school/students', async (req, res) => {
  try {
    const students = await Student.find();
    console.log(students);
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/api/school', async (req, res) => {
    const students = await Student.find();
    console.log(students);
    res.json(students);;
});

async function consoleStudents() {
    const students = await Student.find();
    console.log(students);
}