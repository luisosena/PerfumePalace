import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

function checkConnection() {
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((err) => {
    console.log(err);})
    .then(() => {
    console.log("Connected to MongoD");const connection = mongoose.connection;
    connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
}

checkConnection();



app.get('/', (req, res) => {
    res.send("Our API");
});