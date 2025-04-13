import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 4001;

app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Food") //{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Flexible schema for your 'foods' collection
const foodSchema = new mongoose.Schema({}, { strict: false }); //foodshema and Food is user defined
const Food = mongoose.model("foods", foodSchema);

// API to get calories by food name
app.get("/api/food", async (req, res) => {
  const foodName = req.query.name;

  try {
    const food = await Food.findOne(
      { name: { $regex: new RegExp("^" + foodName + "$", "i") } },
      { calories: 1, _id: 0 }
    );

    if (food) {
      res.json({ calories: food.calories });
    } else {
      res.status(404).json({ message: "Food not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
