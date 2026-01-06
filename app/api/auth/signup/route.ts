import connect from "@/dbConnect/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from 'bcrypt'

connect()

export async function POST(request : NextRequest) {
    try {
        
        const requestBody = await request.json();
        const { name, email, username, password } = requestBody;

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.findOne({ email })
        
        if (user) {
            return NextResponse.json({message : "User Already Exists"} , {status : 404})
        }
        
        const newUser = await  User.create({
           name,
           email,
           username,
           password : hashedPassword,
       })
        
        return NextResponse.json({
            message: "User Created successfully",
            body: newUser._id,
        } , {status : 201})
        

    } catch (error) {
        
        return NextResponse.json(
            { message: "Signup Failed Due to Database Connection Error : " , error },
            { status: 500 }
        )
    }
}