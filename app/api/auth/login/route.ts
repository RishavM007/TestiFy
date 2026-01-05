import connect from "@/dbConnect/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

connect()

async function POST(request: NextRequest) {

    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({email});

    if (!user) {
        return NextResponse.json({message : " User doesnt Exist! Please Login"}, {status : 401 })
    }

    const tokenData = {
        id :user._id,
        name : user.name,
        email :user.email,
       usernam : user.username,
    }

    const token = jwt.sign(tokenData, process.env.TOKEN_PASS!, { expiresIn: '1h' })
    
    request.cookies.set("token", token)

    return NextResponse.json({ message : "Logged In Successfully"}, {status : 200})
    

}

  