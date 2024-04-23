import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv'
dotenv.config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "djrmfg6k9",
  api_key: process.env.API_KEY || "716441766213867",
  api_secret: process.env.API_SECRET || "GqiijgLmq1tlQrFyYeIeGwvAelA",
});

interface CloudinaryUploadResult {
  url: string;
  asset_id: string;
  public_id: string;
}

interface CloudinaryDeleteResult {
  url: string;
  asset_id: string;
  public_id: string;
}

const cloudinaryDeleteImg = async (
  fileToDelete: string
): Promise<CloudinaryDeleteResult> => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve({
        url: result.secure_url,
        asset_id: result.asset_id,
        public_id: result.public_id,
      });
    });
  });
};


export {cloudinary}
