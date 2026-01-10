import connect from "@/dbConnect/dbConnect";
import Question from "@/models/questionModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connect();

    try {
        const questions = await Question.find();
        return NextResponse.json(
            {
                message: "Fetching from database successful",
                success: true,
                data: questions
            },
            {
                status: 201
            }
        )

    } catch (error) {
        return NextResponse.json({ message: "Fetching from database failed" }, { status: 500 })
    }
}