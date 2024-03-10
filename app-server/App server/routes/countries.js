import {Router} from "express";
const countryRouter = Router();
import {showCountries,showCountry} from "../controllers/countries.js";
import {authorizeUser} from "../middleware/auth.js";
countryRouter.get("/",authorizeUser,showCountries);
countryRouter.get("/:name",authorizeUser,showCountry);
export default countryRouter;