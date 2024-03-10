import {Router} from "express";
const signInRouter = Router();
import {signIn} from "../controllers/signin.js";
signInRouter.post("/",signIn);
export default signInRouter;