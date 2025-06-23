import express from "express";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";

import "dotenv/config";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
// app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
  });
});
