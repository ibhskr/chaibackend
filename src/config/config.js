import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT;

console.log(MONGODB_URI)
console.log(PORT)