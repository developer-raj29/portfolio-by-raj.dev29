const uploadImageToCloudinary = require("../utils/imageUploader");
const Technology = require("../models/technology.model");

exports.technologiesGET = async (req, res) => {
  try {
    const data = await Technology.find({});

    return res.status(200).json({
      success: true,
      message: "technologies GET fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching technologiess",
      error: error.message,
    });
  }
};

exports.technologiesADD = async (req, res) => {
  try {
    const { name } = req.body; // ✅ Destructure `name` properly
    const icon = req.files?.icon;

    if (!name || !icon) {
      return res.status(400).json({
        success: false,
        message: "Name and icon are required",
      });
    }

    // ✅ Upload icon to Cloudinary
    const uploadedImage = await uploadImageToCloudinary(
      icon,
      process.env.FOLDER_NAME
    );

    // ✅ Create and save the technologies
    const newtechnologies = new Technology({
      name,
      iconURL: uploadedImage.secure_url,
    });

    await newtechnologies.save(); // ✅ Use await

    // ✅ Success response
    return res.status(201).json({
      success: true,
      message: "technologies added successfully",
      data: newtechnologies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while adding technologies",
      error: error.message,
    });
  }
};

exports.technologiesUPDATE = async (req, res) => {
  try {
    const { id, name } = req.body;
    const icon = req.files?.icon;

    if (!id || !name) {
      return res.status(400).json({
        success: false,
        message: "ID and name are required",
      });
    }

    const updateTech = await Technology.findById(id);
    if (!updateTech) {
      return res.status(404).json({
        success: false,
        message: "Technology not found",
      });
    }

    // ✅ Upload new icon
    if (icon) {
      const uploadedImage = await uploadImageToCloudinary(
        icon,
        process.env.FOLDER_NAME
      );
      updateTech.iconURL = uploadedImage.secure_url;
    }

    // ✅ Update fields
    updateTech.name = name;

    await updateTech.save();

    // ✅ Return response
    return res.status(200).json({
      success: true,
      message: "Technology updated successfully",
      data: updateTech,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while updating technology",
      error: error.message,
    });
  }
};

exports.technologiesDELETE = async (req, res) => {
  try {
    const { id } = req.query;

    console.log(id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Technology ID is required",
      });
    }

    const deletedTech = await Technology.findByIdAndDelete(id);

    if (!deletedTech) {
      return res.status(404).json({
        success: false,
        message: "Technology not found",
      });
    }

    // ✅ Success response
    return res.status(200).json({
      success: true,
      message: "Technology deleted successfully",
      data: deletedTech,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while deleting technology",
      error: error.message,
    });
  }
};
