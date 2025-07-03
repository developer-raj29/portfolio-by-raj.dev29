// const { cloudinaryConnect } = require("../config/cloudinary.cloud");

const cloudinary = require("cloudinary").v2;

const uploadImageToCloudinary = async (file, folder, height, quality) => {
  try {
    // const buffer = image?.buffer || Buffer.from(await image.arrayBuffer?.());

    // if (!buffer) {
    //   throw new Error("Invalid image file");
    // }

    // const uploadedImage = await new Promise((resolve, reject) => {
    //   const stream = cloudinaryConnect.uploader.upload_stream(
    //     { folder: "PORTFOLIO" },
    //     (error, result) => {
    //       if (error) return reject(error);
    //       resolve(result);
    //     }
    //   );

    //   stream.end(buffer);
    // });

    const options = { folder };

    if (height) {
      options.height = height;
    }
    if (quality) {
      options.quality = quality || "auto";
    }

    options.resource_type = "auto";

    const uploadedImage = await cloudinary.uploader.upload(
      file.tempFilePath,
      options
    );

    return uploadedImage;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

module.exports = uploadImageToCloudinary;
