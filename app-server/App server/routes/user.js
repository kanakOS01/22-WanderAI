import {Router} from "express";
const userRouter = Router();
import {showUserInfo,showUserChat, appendUserChat,deleteUser} from "../controllers/user.js";
import {authorizeUser} from "../middleware/auth.js";
userRouter.get("/",authorizeUser,showUserInfo);
userRouter.get("/chat",authorizeUser,showUserChat);
userRouter.put("/chat",authorizeUser,appendUserChat);
userRouter.delete("/",authorizeUser,deleteUser);
export default userRouter;