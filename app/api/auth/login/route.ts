import connect from "@/dbConnect/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {

   try {
      await connect();

      const reqBody = await request.json();
      const { email, password } = reqBody;

      const user = await User.findOne({ email });

      if (!user) {
         return NextResponse.json({ message: " User doesnt Exist! Please Signup" }, { status: 401 })
      }

      const matchedPassword = await bcrypt.compare(password, user.password);

      if (!matchedPassword) {
         return NextResponse.json({message : "Invalid Credentials(Password didnt match)"}, {status : 500})
      }

      const tokenData = {
         id: user._id,
         name: user.name,
         email: user.email,
         username: user.username,
      }

      const token = jwt.sign(tokenData, process.env.TOKEN_PASS!, { expiresIn: '1h' })

      const response = NextResponse.json({ user })

      response.cookies.set("token", token, {
         httpOnly: true
      })

      return response;

   } catch (error) {
      return NextResponse.json("Login Failed in Server", { status: 500 })
   }


}

