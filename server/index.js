import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { downloadImage } from "./controllers/imageDownload.js";
import { dalle } from "./controllers/openai.js";
import {
  midJourneyImage,
  midJourneyImageVersion,
  midJourneyImageButton,
} from "./controllers/midJourney.js";
import { Configuration, OpenAIApi } from "openai";
import { TNL } from "tnl-midjourney-api";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const TNL_API_KEY = process.env.MIDJOURNEY_API_KEY;
const tnl = new TNL(TNL_API_KEY);
export const midjourneyAPI = tnl;

export const openai = new OpenAIApi(configuration);

const upload = multer({ storage: storage });

// routes
// app.post("/twitter/getImage", upload.single("picture"), register);
app.post("/openai/dalle", upload.single("picture"), dalle);
app.post("/imageDownload", downloadImage);
app.post("/midjourney/image", upload.single("picture"), midJourneyImage);
app.post("/midjourney/imageVersion", midJourneyImageVersion);
app.post("/midjourney/imageButton", midJourneyImageButton);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
