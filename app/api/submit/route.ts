import connect from "@/dbConnect/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Question from "@/models/questionModel";


export async function POST(request: NextRequest) {
    try {
        await connect();

        const responseBody = await request.json();

        if (!Array.isArray(responseBody)) {
            return NextResponse.json(
                { message: "Expected an array of questions" },
                { status: 400 }
            );
        }

        
        const formattedQuestions = responseBody.map((q) => ({
            question: q.questionName,
            options: q.answerOptions.filter( (opt : string) => opt.trim() !== ""),
            answerKey: Number(q.correctAnswer),
        }));


        const insertedQuestions = await Question.insertMany(formattedQuestions);

        return NextResponse.json(
            {
                message: "Questions Submitted Successfully",
                insertedCount: insertedQuestions.length,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("DB ERROR ", error);
        return NextResponse.json(
            { message: "Question Submit Failed In Db" },
            { status: 500 }
        );
    }
}
