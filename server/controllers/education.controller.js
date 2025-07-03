const Education = require("../models/education.model");
const uploadImageToCloudinary = require("../utils/imageUploader");

exports.EducationGET = async (req, res) => {
  try {
    const data = await Education.find({});

    return res.status(200).json({
      success: true,
      message: "Education GET fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching Education",
      error: error.message,
    });
  }
};

exports.EducationADD = async (req, res) => {
  try {
    const {
      degree,
      fieldOfStudy,
      institutionName,
      location,
      startDate,
      endDate,
      grade,
      description,
      isCurrent,
    } = req.body;

    const instituteImage = req.files?.instituteImage;
    let imageUrl = "";

    if (!fieldOfStudy || !institutionName || !location || !startDate) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    if (instituteImage) {
      const uploadedImage = await uploadImageToCloudinary(
        instituteImage,
        process.env.FOLDER_NAME
      );
      imageUrl = uploadedImage.secure_url;
    }

    const newEdu = new Education({
      degree,
      fieldOfStudy,
      institutionName,
      location,
      startDate,
      endDate,
      grade,
      description,
      isCurrent,
      instituteImage: imageUrl,
    });

    const saved = await newEdu.save();

    return res.status(201).json({
      success: true,
      message: "Education added successfully",
      data: saved,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding education",
      error: error.message,
    });
  }
};

exports.EducationUPDATE = async (req, res) => {
  try {
    const {
      id,
      degree,
      fieldOfStudy,
      institutionName,
      location,
      startDate,
      endDate,
      grade,
      description,
      isCurrent,
    } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "ID is required" });
    }

    const updateData = {
      degree,
      fieldOfStudy,
      institutionName,
      location,
      startDate,
      endDate,
      grade,
      description,
      isCurrent,
    };

    if (req.files?.instituteImage) {
      const uploaded = await uploadImageToCloudinary(
        req.files.instituteImage,
        "education"
      );
      updateData.instituteImage = uploaded.secure_url;
    }

    const updatedEdu = await Education.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedEdu) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Education updated successfully",
      data: updatedEdu,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating education",
      error: error.message,
    });
  }
};

exports.EducationDELETE = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Education ID is required",
      });
    }

    const deleted = await Education.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Education deleted successfully",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting education",
      error: error.message,
    });
  }
};
