import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}/?${process.env.MONGODB_OPTIONS}&appName=${process.env.MONGODB_APP_NAME}`)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));