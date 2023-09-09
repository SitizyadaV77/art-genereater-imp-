import dotenv from "dotenv";
import { openai } from "../index.js";
import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";
import Jimp from "jimp";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

export const dalle = async (req, res) => {
  try {
    const { prompt, image_name } = req.body;

    // const aiResponse = await openai.createImage({
    //   prompt: prompt,
    //   n: 1,
    //   size: "512x512",
    //   response_format: "b64_json",
    // });

    // const imagepath = `D:\\AllProjectGitea\\NFTGenerator\\server\\public\\assets\\${image_name}`;
    const imagepath = path.join(__dirname, `../public/assets/${image_name}`);

    const aiResponse = await openai.createImageVariation(
      fs.createReadStream(imagepath),
      4,
      "512x512"
    );
    // download

    // const imageBuffer = fs.readFileSync(imagepath);

    // // Convert the buffer to a base64-encoded string
    // const base64String = imageBuffer.toString("base64");

    // Create a JSON object with the base64-encoded string
    // const b64Json = { image: base64String };

    // const image = b64Json.image;

    // const image = aiResponse.data.data[0].b64_json;
    // res.status(200).json({ photo: image });
    // delete image;
    fs.unlink(imagepath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      // console.log('Image deleted successfully');
    });

    res.status(200).json({ photo: aiResponse.data });
  } catch (error) {
    // console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
};
