import axios from "axios";
import { setChat } from "../state/chat";
import store from "../store";
import {appServerUrl} from "../config";

export const initChat = async (token) => {
    try{
        const res = await axios.get(appServerUrl+"/api/_v1/me/chat", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        store.dispatch(setChat(res.data));
    }catch(err){
        console.log(err.response.data);
    }
};