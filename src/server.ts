import express from "express";
import payload from "payload";
import cors from "cors";
require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: "*", // Allow all origins (for development or wide use)
    methods: ["POST"], // Allow only POST method
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers (adjust if needed)
  })
);
// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3069);
};

start();
