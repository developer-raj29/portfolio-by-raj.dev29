const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false, // Keep null for ongoing jobs
  },
  workMode: {
    type: String,
    enum: ["Onsite", "Remote", "Hybrid"],
    default: "Onsite",
  },
  responsibilities: [
    {
      type: String,
      required: true,
    },
  ],
  technologies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology",
    },
  ],
  companyLogo: {
    type: String,
    required: false,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

module.exports = Experience;
