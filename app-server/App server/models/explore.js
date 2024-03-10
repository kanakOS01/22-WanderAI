import { Schema, model } from "mongoose";

const exploreSchema = new Schema({
    name:String,
    image:String,
    desc:String,
});

export default model("Explore", exploreSchema);