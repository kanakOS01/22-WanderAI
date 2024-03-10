import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { unSecurePass } from "../utils/password.js";

const signIn = async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {

        const userExists = await User.findOne({ username });
        if (!userExists) return res.status(409).send({
            "error": "User not found",
            "code": 409
        });
        const { token } = userExists;
        try {
            const unHashedPass = jwt.verify(token, process.env.JWT_SECRET);
            const pass = unSecurePass(unHashedPass);
            if (pass !== password) {
                return res.status(409).send({
                    "error": "Incorrect password",
                    "code": 409
                });
            } else {
                console.log(new Date().toLocaleString(), "sign-in success");
                return res.send({ token: jwt.sign({ username, token }, process.env.JWT_SECRET, { expiresIn: 60*60*12*7 }) });
            }
        } catch (err) {
            return res.status(500).send("sign-in failed");
        }

    } else {
        return res.status(404).send("sign-in failed");
    }
};
export {
    signIn
};