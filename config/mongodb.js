import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    await mongoose.connect(`${process.env.MONGODB_URL}`);
  } catch (error) {
    console.log("Error while connecting with DB", error);
  }
};

export default connectDB;
