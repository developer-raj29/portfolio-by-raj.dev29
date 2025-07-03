const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: false, // Keep null for ongoing jobs
    },
    imageURL: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technology",
        required: true,
      },
    ],
    features: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    liveURL: {
      type: String,
      required: false,
      trim: true,
    },
    githubURL: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
