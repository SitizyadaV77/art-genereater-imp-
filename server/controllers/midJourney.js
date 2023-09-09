import dotenv from "dotenv";
import { midjourneyAPI } from "../index.js";

import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

export const midJourneyImage = async (req, res) => {
  try {
    const { prompt, image_name } = req.body;
    const imagepath = path.join(__dirname, `../public/assets/${image_name}`);

    const midJourneyResponse = await midjourneyAPI.img2img(prompt, imagepath);
    let progressResponse = {
      progress: 0,
      response: {},
    };
    //  handle progress until 100%
    while (progressResponse?.progress < 100) {
      try {
        progressResponse = await midjourneyAPI.getMessageAndProgress(
          midJourneyResponse.messageId
        );

        await new Promise((resolve) => setTimeout(resolve, 2250));
      } catch (err) {
        // handle 400 error and continue
        if (err.response.status === 400) {
          continue;
        }
      }
    }

    fs.unlink(imagepath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      // console.log('Image deleted successfully');
    });

    if (midJourneyResponse.success) {
      res.status(200).json(progressResponse);
      return;
    }
    // Wait until the progress is 100%

    res.status(200).json({ photo: midJourneyResponse });
  } catch (error) {
    res.status(500).send(error || "Something went wrong");
  }
};

export const midJourneyImageVersion = async (req, res) => {
  try {
    const { version, buttonId } = req.body;

    const midJourneyResponse = await midjourneyAPI.button(version, buttonId);
    let progressResponse = {
      progress: 0,
      response: {},
    };
    //  handle progress until 100%
    while (progressResponse?.progress < 100) {
      try {
        progressResponse = await midjourneyAPI.getMessageAndProgress(
          midJourneyResponse.messageId
        );

        await new Promise((resolve) => setTimeout(resolve, 2250));
      } catch (err) {
        // handle 400 error and continue
        if (err.response.status === 400) {
          continue;
        }
      }
    }

    if (midJourneyResponse.success) {
      res.status(200).json(progressResponse);
      return;
    }
    // Wait until the progress is 100%

    res.status(200).json({ photo: midJourneyResponse });
  } catch (error) {
    res.status(500).send(error || "Something went wrong");
  }
};

export const midJourneyImageButton = async (req, res) => {
  try {
    const { button, buttonMessageId } = req.body;

    const midJourneyResponse = await midjourneyAPI.button(
      "V1",
      "70mwC7jepJx043Gy1AtG"
    );

    // const midJourneyResponse = {
    //   success: true,
    //   buttonMessageId: "70mwC7jepJx043Gy1AtG",
    // };

    let progressResponse = {
      progress: 0,
      response: {},
    };
    //  handle progress until 100%
    while (progressResponse?.progress < 100) {
      try {
        progressResponse = await midjourneyAPI.getMessageAndProgress(
          midJourneyResponse.messageId
        );

        await new Promise((resolve) => setTimeout(resolve, 2250));
      } catch (err) {
        // handle 400 error and continue
        if (err.response.status === 400) {
          continue;
        }
      }
    }

    if (midJourneyResponse.success) {
      res.status(200).json(progressResponse);
      return;
    }

    res.status(200).json({ photo: midJourneyResponse });
    //
  } catch (error) {
    res.status(500).send(error || "Something went wrong");
  }
};
