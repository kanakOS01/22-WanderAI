import User from "../models/user.js";
export const showUsers = async (_, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (err) {
        res.status(401).send(err.message);
    }
};