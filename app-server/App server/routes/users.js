import {Router} from "express";
const usersRouter = Router();
import {showUsers} from "../controllers/users.js";
import {authorizeUser} from "../middleware/auth.js";
usersRouter.post("/",authorizeUser,showUsers);
export default usersRouter;