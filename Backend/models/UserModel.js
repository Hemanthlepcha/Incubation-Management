import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  CID: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Mentor", "Mentee"],
    default: "User",
  },
  expertise: [
    {
      type: String,
      required: true,
    },
  ],
  phoneNo: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
