import express from "express";
import mongoose from "mongoose";

const PORT = 5000;
const DB_URL = `mongodb+srv://jeyefendi:AzeRock7@atlascluster.qgzhcco.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  res.status(200).json("Server is working");
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp()