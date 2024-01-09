import dotenv from "dotenv";
import express from 'express'
import connectDB from "./db/index.js";
dotenv.config();

const app = express();


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running in port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed !! ", err);
  });

//import { DB_NAME } from "./constants";
// import { express } from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error : ", error);
//     throw err;
//   }
// })();
