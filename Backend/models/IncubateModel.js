import mongoose from "mongoose";

const incubeRegisterSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true,
  },
  training: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    enum: ["Existing Business", "New Business"],
    required: true,
  },
  businessDescription: {
    type: String,
    required: true,
  },
  supportRequired: {
    type: String,
    required: true,
  },
  technologyUsed: {
    type: String,
    required: true,
  },
  locationAfterGraduation: {
    type: String,
    required: true,
  },
  spaceRequired: {
    type: String,
    required: true,
  },
});

const IncubeRegisterModel = mongoose.model("incubes", incubeRegisterSchema);

export default IncubeRegisterModel;
