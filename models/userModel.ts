import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type :  String,
        unique: true,
        required : [true , "Please Enter Username"],
    },
    email: {
        type: String,
        unique: true,
        required : [true, "Please Enter Your Email Id"]
    },
    password: {
        type: String,
        required : [true , "Please Enter Your Password"]
    },
    isVerified: {
        type: Boolean,
        default : false
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default :"user",
        required : true,
    },
    verifyToken: { type: String },
    verifyTokenExpiry : {type : Date}
},
{timestamps :true}
)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User