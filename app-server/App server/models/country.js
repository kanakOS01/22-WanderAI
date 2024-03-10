import { Schema, model } from "mongoose";

const countrySchema = new Schema({
    name: String,
    numericCode: String,
    callingCode: String,
    currencies: {
        type: Map,
        of: {
            name: String,
            symbol: String
        }
    },
});

export default model("Country", countrySchema);