import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { securePassword } from "../utils/password.js";

const signUp = async (req, res) => {
    const { username, password, profilePic, email } = req.body;
    if (username && password) {

        let userExists = await User.findOne({ username });
        if(userExists) return res.status(409).send({
            "error": "Username already exists",
            "code": 409
        });

        userExists = await User.findOne({ email });
        if(userExists) return res.status(409).send({
            "error": "Email already used",
            "code": 409
        });

        try {
            const pass = securePassword(password);
            const token = jwt.sign(pass, process.env.JWT_SECRET);
            const newUser = new User({ username, token, profilePic, email,chat:[] });
            await newUser.save();
            const obj = newUser.toObject();
            delete obj.token;
            return res.send(obj);
        } catch (err) {
            return res.status(500).send("sign-up failed");
        }
        
    } else {
        return res.status(404).send("sign-up failed");
    }
};
export {
    signUp
};