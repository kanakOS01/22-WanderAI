import Country from "../models/country.js";

const showCountries = async (req, res) => {
    try {
        const countries = await Country.find({});
        res.status(200).json(countries);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};
const showCountry = async (req, res) => {
    try {
        const {name} = req.params;
        const countries = await Country.findOne({name});
        if(!countries) {
            return res.status(404).json({message: "Country not found"});
        }
        res.status(200).json(countries);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};
export {
    showCountries,
    showCountry
};