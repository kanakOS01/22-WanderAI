import Explore from "../models/explore.js";

const showPlaces = async (_,res) => {
    const places = await Explore.find({});
    res.send(places);
};
export {
    showPlaces
};