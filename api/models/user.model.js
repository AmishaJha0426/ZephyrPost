import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        typpe:String,
        required:true,
        unique:true,
    }, 
    email:{
        type:Strng,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
}, {timestamps :true}
);

const User=mongoose.model('User', userSchema);

export default User;