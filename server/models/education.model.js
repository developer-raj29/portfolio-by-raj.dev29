const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true, // e.g., Bachelor of Technology
  },
  fieldOfStudy: {
    type: String,
    required: true, // e.g., Electronics & Communication Engineering
  },
  institutionName: {
    type: String,
    required: true, // e.g., PIEMR Indore
  },
  instituteImage: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true, // e.g., Indore, Madhya Pradesh
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false, // null if ongoing
  },
  grade: {
    type: String,
    required: false, // e.g., "8.2 CGPA", "First Class"
  },
  description: {
    type: String,
    required: false, // Optional note about achievements or coursework
  },
  isCurrent: {
    type: Boolean,
    default: false, // true if still studying
  },
});

const Education = mongoose.model("Education", EducationSchema);

module.exports = Education;
