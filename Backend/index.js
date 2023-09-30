import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import UserModel from "./models/UserModel.js";
import IncubeRegisterModel from "./models/IncubateModel.js";
import AchievementModel from "./models/Achivements.js";
import bcrypt from "bcrypt";
import cors from "cors"; // Import the cors middleware

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

mongoose.connect(
  "mongodb+srv://startup2023:$heerioeD16@cluster0.z32x289.mongodb.net/startup?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
//routes

// Endpoint for user sign-up
app.post("/signup", async (req, res) => {
  const { name, CID, email, gender, password, role, expertise, phoneNo } =
    req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.json({ message: "User Already Exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      CID,
      email,
      gender,
      password: hashedPassword,
      role,
      expertise,
      phoneNo,
    });
    console.log(newUser);
    await newUser.save(); // Save the newUser object to the database

    res.json({ message: "User Created Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for user authentication
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({ message: "User Doesn't Exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({ message: "Username or Password Is Incorrect!" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    const { _id, role } = user; // Extract the _id and role from the user object
    res.json({ token, userID: _id, role }); // Add the role to the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for creating Incube Register
app.post("/incube-register", async (req, res) => {
  const {
    institution,
    training,
    duration,
    businessType,
    businessDescription,
    supportRequired,
    technologyUsed,
    locationAfterGraduation,
    spaceRequired,
  } = req.body;
  try {
    const newIncubeRegister = new IncubeRegisterModel({
      institution,
      training,
      duration,
      businessType,
      businessDescription,
      supportRequired,
      technologyUsed,
      locationAfterGraduation,
      spaceRequired,
    });

    await newIncubeRegister.save(); // Save the newIncubeRegister object to the database

    res.json({ message: "Incube Register Created Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Achievements Endpoint get
app.get('/achievements', async (req, res) => {
  try {
    // Retrieve the values from the AchievementModel
    const achievements = await AchievementModel.findOne();

    if (!achievements) {
      return res.status(404).json({ error: 'Achievement data not found' });
    }

    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the achievements
app.post('/achievementup', async (req, res) => {
  try {
    const { aecGraduates, becGraduates, totGraduates, events, incubatees, startups } = req.body;

    // Find the AchievementModel document
    const achievements = await AchievementModel.findOne();

    if (!achievements) {
      return res.status(404).json({ error: 'Achievement data not found' });
    }

    // Update the values
    achievements.aecGraduates = aecGraduates;
    achievements.becGraduates = becGraduates;
    achievements.totGraduates = totGraduates;
    achievements.events = events;
    achievements.incubatees = incubatees;
    achievements.startups = startups;

    // Save the updated document
    await achievements.save();

    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
