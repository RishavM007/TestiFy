import connect from "@/dbConnect/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connect()
        const response = NextResponse.json({ message: " Logout Successfull" }, { status: 201 })
        
        response.cookies.set("token", "", { expires: Date.now() })

        return response;
        
        
    } catch (error) {
        return NextResponse.json({ message: "Logout Failed" }, { status : 500})
    }
}