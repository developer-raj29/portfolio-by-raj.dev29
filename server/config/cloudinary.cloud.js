const cloudinary = require("cloudinary").v2; //! Cloudinary is being required
require("dotenv").config();

exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
    });
    console.log("☁️  Cloudinary Connected...");
  } catch (error) {
    console.error("❌ Cloudinary Issue");
    console.log(error);
  }
};
