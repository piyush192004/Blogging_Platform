const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => {
      const ext = path.extname(file.originalname).slice(1).toLowerCase();
      if (["jpg", "jpeg", "png"].includes(ext)) {
        return ext;
      }
      return "jpg";
    },
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

module.exports = { cloudinary, storage };
