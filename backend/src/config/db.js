import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
