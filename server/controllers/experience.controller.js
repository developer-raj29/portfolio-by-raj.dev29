const Experience = require("../models/experience.model");
const uploadImageToCloudinary = require("../utils/imageUploader");

exports.ExperienceGET = async (req, res) => {
  try {
    const data = await Experience.find().populate(
      "technologies",
      "name iconURL"
    );

    return res.status(200).json({
      success: true,
      message: "Experience GET fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching Experience",
      error: error.message,
    });
  }
};

exports.ExperienceADD = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      startDate,
      endDate,
      workMode,
      responsibilities,
      technologies,
    } = req.body;

    const companyLogo = req.files?.companyLogo;

    if (
      !jobTitle ||
      !companyName ||
      !location ||
      !startDate ||
      !responsibilities ||
      !technologies
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const parsedTechnologies = Array.isArray(technologies)
      ? technologies
      : JSON.parse(technologies);
    const parsedResponsibilities = Array.isArray(responsibilities)
      ? responsibilities
      : JSON.parse(responsibilities);

    let logoUrl = "";
    if (companyLogo) {
      const uploadedLogo = await uploadImageToCloudinary(
        companyLogo,
        process.env.FOLDER_NAME
      );
      logoUrl = uploadedLogo.secure_url;
    }

    const newExperience = new Experience({
      jobTitle,
      companyName,
      location,
      startDate,
      endDate,
      workMode,
      responsibilities: parsedResponsibilities,
      technologies: parsedTechnologies,
      companyLogo: logoUrl,
    });

    const saved = await newExperience.save();

    return res.status(201).json({
      success: true,
      message: "Experience added successfully",
      data: saved,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while adding experience",
      error: error.message,
    });
  }
};

exports.ExperienceUPDATE = async (req, res) => {
  try {
    const {
      id,
      jobTitle,
      companyName,
      location,
      startDate,
      endDate,
      workMode,
      responsibilities,
      technologies,
    } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Experience ID is required",
      });
    }

    const updateData = {
      jobTitle,
      companyName,
      location,
      startDate,
      endDate,
      workMode,
    };

    if (technologies)
      updateData.technologies = Array.isArray(technologies)
        ? technologies
        : JSON.parse(technologies);

    if (responsibilities)
      updateData.responsibilities = Array.isArray(responsibilities)
        ? responsibilities
        : JSON.parse(responsibilities);

    if (req.files?.companyLogo) {
      const uploaded = await uploadImageToCloudinary(
        req.files.companyLogo,
        "experiences"
      );
      updateData.companyLogo = uploaded.secure_url;
    }

    const updated = await Experience.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("technologies", "name iconURL");

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while updating experience",
      error: error.message,
    });
  }
};

exports.ExperienceDELETE = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Experience ID is required",
      });
    }

    const deleted = await Experience.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while deleting experience",
      error: error.message,
    });
  }
};
