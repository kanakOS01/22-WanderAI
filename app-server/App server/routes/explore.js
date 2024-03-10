import {Router} from "express";
const exploreRouter = Router();
import {showPlaces} from "../controllers/explore.js";
import {authorizeUser} from "../middleware/auth.js";
exploreRouter.get("/",authorizeUser,showPlaces);
export default exploreRouter;