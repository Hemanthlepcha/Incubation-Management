import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
  aecGraduates: {
    type: Number,
    default: 0,
  },
  becGraduates: {
    type: Number,
    default: 0,
  },
  totGraduates: {
    type: Number,
    default: 0,
  },
  events: {
    type: Number,
    default: 0,
  },
  incubatees: {
    type: Number,
    default: 0,
  },
  startups: {
    type: Number,
    default: 0,
  },
});

const AchievementModel = mongoose.model("achievements", AchievementSchema);

export default AchievementModel
