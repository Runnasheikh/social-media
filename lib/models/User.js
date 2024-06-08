import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    clearId:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    profilePhoto:{
        type:String,
        required:true
    },
    posts:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
        default:[]
    },
    Savedposts:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
        default:[]
    },
    likeposts:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
        default:[]
    },
    Followers:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
        default:[]
    },
    Following:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const User = mongoose.model('User',UserSchema)
export default User