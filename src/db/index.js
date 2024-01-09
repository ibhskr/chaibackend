import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import dotenv from "dotenv"
dotenv.config();


async function connectDB() {
  console.log(`${process.env.MONGODB_URI}`);
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MONGODB connected");
  } catch (error) {
    console.log("MONGODB connection Error : ", error);
    process.exit(1);
  }
}

export default connectDB;
