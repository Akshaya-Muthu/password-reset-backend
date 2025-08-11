import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB();

// ✅ UPDATED CORS CONFIG
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://frontemd.netlify.app", // Make sure this matches the actual Netlify frontend domain
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => res.send("API Working ✅"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Global Error Handler (Optional)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

app.listen(port, () => console.log(`🚀 Server running on PORT: ${port}`));
