import dotenv from "dotenv";
dotenv.config();
dotenv.config();
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
  "mongodb+srv://hemanthlepcha0:incubation@cluster0.q3pancz.mongodb.net/?retryWrites=true&w=majority",
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


// Define an Event schema and model using Mongoose
const eventSchema = new mongoose.Schema({
  eventName: String,
  date: Date,
  detail: String,
  status: String,
});

const Event = mongoose.model("Event", eventSchema);

// Parse JSON requests
app.use(express.json());

// Create a route for creating events
app.post("/api/events", async (req, res) => {
  try {
    const eventData = req.body;

    // Create a new event document
    const event = new Event(eventData);

    // Save the event to the database
    await event.save();

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define a GET route to retrieve events
app.get("/api/events", async (req, res) => {
  try {
    // Fetch events from the database (assuming your model is called "Event")
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Update an event by ID
app.put("/api/events/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const updatedEvent = req.body; // Updated event data from the request body
    
    // Update the event in your database (e.g., MongoDB)
    // Example using Mongoose:
    const event = await EventModel.findByIdAndUpdate(eventId, updatedEvent, { new: true });
    
    res.json(event);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an event by name
app.delete("/api/events/:eventName", async (req, res) => {
  const eventName = req.params.eventName;

  try {
    // Delete the event from the database using the EventModel
    await EventModel.findOneAndDelete({ eventName });
    res.sendStatus(204); // No content (successful deletion)
  } catch (error) {
    console.error("Error deleting event:", error);
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

// Endpoint for getting all the users
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find(); // Retrieve all users from the database
    res.json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message }); // Send the error message to the client for debugging
  }
});

const EventRegistration = mongoose.model('EventRegistration', {
  eventName: String, // Change this to event name
  name: String,
  year: String,
  department: String,
  idea: String,
  description: String,
  email: String, // Here, the email field is defined as a String
});

app.use(express.json());

// Event registration endpoint
app.post('/api/event-registrations', async (req, res) => {
  try {
    const { eventName, name, year, department, idea, description, userEmail } = req.body;

    // Create a new event registration document
    const eventRegistration = new EventRegistration({
      eventName, // Change eventId to eventName
      name,
      year,
      department,
      idea,
      description,
      email: userEmail, // Use userEmail here
    });

    // Save the registration to the database
    await eventRegistration.save();

    res.status(201).json({ message: 'Event registration successful' });
  } catch (error) {
    console.error('Error registering for the event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Endpoint for getting event registrations
app.get('/api/event-registrations', async (req, res) => {
  try {
    const eventRegistrations = await EventRegistration.find();
    res.json(eventRegistrations);
  } catch (error) {
    console.error('Error fetching event registrations:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});




//

//Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
