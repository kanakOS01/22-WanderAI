import {Schema,model} from "mongoose";

const userSchema = new Schema({ 
    username:  { 
        type: String, 
        default: "" 
    }, 
    profilePic:  { 
        type: String || undefined, 
        default: "" 
    },
    email:  { 
        type: String || undefined, 
        default: "" 
    },
    token:  { 
        type: String, 
        default: "" 
    },
    chat:  { 
        type: [Object], 
        default:[]
    },
});

export default model("User", userSchema);