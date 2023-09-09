import { tweet } from "../twitterfetch.js";

export const register = async (req, res) => {
  try {
    const { image_name } = req.body;

    // const image = await tweet(image_name);
    res.status(200).json(image_name);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
