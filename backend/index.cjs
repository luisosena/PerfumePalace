const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files statically
app.use(express.static('public')); // Serve frontend files

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((error) => {
    console.log(error);})

const perfumeSchema = new mongoose.Schema({
  brand: String,
  name: String,
  image: String,
  description: String,
  price: Number,
  quantity: Number,
});

const Perfume = mongoose.model('Perfume', perfumeSchema);


app.get('/api/Perfumes', async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    console.log(perfumes);
    res.json(perfumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
