const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");
const cardRoutes = require("./routes/cardRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const reviewModel = require("./models");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(
    "mongodb+srv://mabenblal:0z2Cdm5TiWGzKf9K@cluster0.auxy0zc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

const app = express();

app.use(cors());
app.use(express.static("Html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRoutes);
app.use("/", reviewRoutes);

app.use("/tour", tourRoutes);
app.use("/", cardRoutes);

const newReview = new reviewModel({
  userName: "JohnDoe", // Example username
  imgUrl: "https://example.com/user.jpg", // Example image URL
  reviewText: "This is a great product!", // Example review text
  // Add other fields of your Review model as needed
});

// Save the new review to the database
newReview
  .save()
  .then((savedReview) => {
    console.log("Review saved successfully:", savedReview);
  })
  .catch((error) => {
    console.error("Error saving review:", error);
  });

app.listen(3001, () => {
  console.log(`App running on port 3001...`);
});
