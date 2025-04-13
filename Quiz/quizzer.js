import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Disease");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Flexible schema for your 'diseases' collection
const DiseaseSchema = new mongoose.Schema({}, { strict: false });
const Disease = mongoose.model("diseases", DiseaseSchema);

// GET endpoint
app.get("/api/find", async (req, res) => {
  console.log("got a get request");
  const name = req.query.name;
console.log(name);
  try {
    const finder = await Disease.find(
      { symptoms: { $regex: new RegExp(name, "i") } },
      { disease: 1, _id: 0 }
    );

    if (finder.length > 0) {
      res.json(finder);
    } else {
      res.status(404).json({ message: "No disease found with that symptom" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});