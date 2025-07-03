const Project = require("../models/project.model");
const uploadImageToCloudinary = require("../utils/imageUploader");

exports.ProjectsGET = async (req, res) => {
  try {
    const data = await Project.find().populate("technologies", "name iconURL");

    return res.status(200).json({
      success: true,
      message: "Projects GET fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching Projects",
      error: error.message,
    });
  }
};

exports.ProjectADD = async (req, res) => {
  try {
    const {
      projectName,
      description,
      startDate,
      endDate,
      technologies, // should be an array of ObjectIds
      features,
      liveURL,
      githubURL,
      category,
    } = req.body;

    const imageFile = req.files?.imageURL;

    if (
      !projectName ||
      !description ||
      !technologies ||
      !startDate ||
      !imageFile ||
      !features ||
      !liveURL ||
      !githubURL ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Upload image to Cloudinary
    const uploadedImage = await uploadImageToCloudinary(
      imageFile,
      process.env.FOLDER_NAME
    );

    // ✅ Create new project
    const newProject = new Project({
      projectName,
      description,
      startDate,
      endDate,
      category,
      technologies: JSON.parse(technologies), // if sent as JSON string from frontend
      features: JSON.parse(features), // same for features
      imageURL: uploadedImage.secure_url,
      liveURL,
      githubURL,
    });

    const savedProject = await newProject.save();

    // ✅ Return saved project (populate if needed later)
    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: savedProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while adding project",
      error: error.message,
    });
  }
};

exports.ProjectUPDATE = async (req, res) => {
  try {
    const {
      id,
      projectName,
      description,
      startDate,
      endDate,
      technologies,
      features,
      liveURL,
      githubURL,
      category,
    } = req.body;

    const imageFile = req.files?.imageURL;

    if (
      !id ||
      !projectName ||
      !description ||
      !startDate ||
      !technologies ||
      !features ||
      !liveURL ||
      !githubURL ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Parse technologies and features if needed
    const parsedTechnologies = Array.isArray(technologies)
      ? technologies
      : JSON.parse(technologies);
    const parsedFeatures = Array.isArray(features)
      ? features
      : JSON.parse(features);

    // Prepare update object
    const updateData = {
      projectName,
      description,
      startDate,
      endDate,
      category,
      technologies: parsedTechnologies,
      features: parsedFeatures,
      liveURL,
      githubURL,
    };

    // If new image uploaded
    if (imageFile) {
      const uploadedImage = await uploadImageToCloudinary(
        imageFile,
        process.env.FOLDER_NAME
      );
      updateData.imageURL = uploadedImage.secure_url;
    }

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("technologies", "name iconURL");

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while updating project",
      error: error.message,
    });
  }
};

exports.ProjectDELETE = async (req, res) => {
  try {
    const { id } = req.query;

    console.log(id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }

    const deletedPro = await Project.findByIdAndDelete(id);

    if (!deletedPro) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // ✅ Success response
    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: deletedPro,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while deleting Project",
      error: error.message,
    });
  }
};
