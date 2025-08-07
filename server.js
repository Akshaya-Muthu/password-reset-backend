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

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://frontemd.netlify.app",
];

// CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS Not Allowed"));
    }
  },
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => res.send("API Working ✅"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Error handling for CORS
app.use((err, req, res, next) => {
  if (err.message === "CORS Not Allowed") {
    return res.status(403).json({ success: false, message: "Blocked by CORS" });
  }
  next(err);
});

app.listen(port, () => console.log(`🚀 Server running on PORT: ${port}`));
