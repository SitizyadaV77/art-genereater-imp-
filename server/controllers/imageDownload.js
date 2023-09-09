import download from "image-downloader";
import path from "path";
import request from "request";
import fs from "fs";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateRandomName() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `image_${timestamp}_${randomString}.png`;
}

export const downloadImage = async (req, res) => {
  const { url } = req.body;
  const imageName = generateRandomName();
  const imagePath = path.join(__dirname, "../public/assets/", imageName);
  const options = {
    url: url,
    dest: imagePath,
  };
  try {
    await download.image(options).catch((err) => console.error(err));
    const stream = fs.createReadStream(imagePath);
    stream.on("close", () => {
      // Delete the downloaded image from the server
      fs.unlinkSync(imagePath);
    });
    res.setHeader("Content-Type", "image/png");
    stream.pipe(res);
  } catch (error) {
    // console.error(error);
    res.status(500).end();
  }
};

// downloadImage("https://pbs.twimg.com/media/E1ZQ9ZbXMAQ8Z8z.jpg");
