const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // ✅ Load .env early
// Start Server
const PORT = process.env.PORT || 8000;

const { cloudinaryConnect } = require("./config/cloudinary.cloud");
const DB = require("./config/DB.mongo");

// Import Routes
const technologiesRoutes = require("./routes/technologies.route");
const projectsRoutes = require("./routes/project.route");
const educationRoutes = require("./routes/education.route");
const experienceRoutes = require("./routes/experience.route");

// Connect DB and Cloudinary
DB();
cloudinaryConnect();

// Middleware
app.use(cors());
app.use(express.json());

// File Upload Middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Routes
app.use("/api/v1/technologies", technologiesRoutes);
app.use("/api/v1/project", projectsRoutes);
app.use("/api/v1/education", educationRoutes);
app.use("/api/v1/experience", experienceRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    message: `✅ Portfolio Server Running on Port ${PORT}`,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
