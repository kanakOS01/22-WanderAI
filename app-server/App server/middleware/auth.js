import User from "../models/user.js";
import jwt from "jsonwebtoken";

const unAuthorized = (res) => {
    res.status(401).send({
        "error": "You are not authorized to access this resource.",
        "code": 401
    });
};

export const authorizeUser = async (req, res, next) => {
    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const { username } = jwt.verify(token, process.env.JWT_SECRET);
            if(username==="admin"){
                const user = await User.findOne({ username:"admin" });
                if (!user) return unAuthorized(res);
                req.userId = user._id;
            }else{                
                const user = await User.findOne({ username });
                if (!user) return unAuthorized(res);
                req.userId = user._id;
            }
            next();
        } catch (err) {
            return unAuthorized(res);
        }
    }
    else return unAuthorized(res);
};