import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import Twit from "twit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
var T = new Twit({
  consumer_key: process.env.REACT_APP_API_KEY,
  consumer_secret: process.env.REACT_APP_API_KEY_SECRET,
  access_token: process.env.REACT_APP_ACCESS_TOKEN,
  access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
const client = new TwitterApi({
  appKey: "O6lqVKapbAC27m5Cd3qumTs7G",
  appSecret: "UHAcH78KktHNwXUfafXR3MgcY4iHHJdVK5oiLu4zBCYeYkkJ8I",
  accessToken: "1502128822023761922-VYEY7Yl46yxDUudmfbDNttAbmVKGPI",
  accessSecret: "x39pR6KvBKPcV6YIhW7GJgXeuYXEgp6sjnmX45P25MBOQ",
});

const bearer = new TwitterApi(process.env.REACT_APP_TWITTER_BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

const filePath =
  "D:\\AllProjectGitea\\NFTGenerator\\client\\src\\assets\\profile.png";

export const tweet = async (image_path) => {
  try {
    // use the relative path to the image file
    const filePath = path.join(
      __dirname,
      "..",
      "server",
      "public",
      "assets",
      image_path
    );
    //

    const mediaid = await twitterClient.v1.uploadMedia(filePath, {
      mimeType: "image/png",
    });
    // console.log(mediaid)
    const media_ids = [mediaid];
    const tweet = await twitterClient.v2.tweet("Jack Sparrow is here", {
      media: {
        media_ids: media_ids,
      },
    });
    // console.log(tweet.data.id): "1642798616116092928",
    //   },
    // };
    // const imageUrl = "";
    const imageUrl = T.get("statuses/show", { id: tweet.data.id })
      .then((response) => {
        return response.data.entities.media[0].media_url;
      })
      .catch((err) => {
        console.log(err);
      });
    return imageUrl;
  } catch (e) {
    console.log(e);
  }
};
