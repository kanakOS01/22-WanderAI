import {Router} from "express";
const signupRouter = Router();
import {signUp} from "../controllers/signup.js";
signupRouter.post("/",signUp);
export default signupRouter;