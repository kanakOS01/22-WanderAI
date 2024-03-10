import User from "../models/user.js";

export const showUserInfo = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (err) {
        res.status(401).send(err.message);
    }
};
export const showUserChat = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findById(id);
        res.status(200).send(user.chat);
    } catch (err) {
        res.status(401).send(err.message);
    }
};
export const appendUserChat = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findById(id);

        const { chat } = req.body;
        const resp = await User.findByIdAndUpdate(id, { chat: [...user.chat, chat] }, { new: true });

        res.status(200).send(resp.chat);
    } catch (err) {
        res.status(401).send(err.message);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const id = req.userId;
        const user = await User.findById(id);
        await User.findByIdAndDelete(id);
        res.status(200).send(user);
    } catch (err) {
        res.status(401).send(err.message);
    }
};