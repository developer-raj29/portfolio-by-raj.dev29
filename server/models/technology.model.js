const mongoose = require("mongoose");

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  iconURL: {
    type: String,
    required: false,
  },
});

const Technology = mongoose.model("Technology", TechnologySchema);

module.exports = Technology;
