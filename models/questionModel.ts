import mongoose from "mongoose";

const { Schema } = mongoose;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required : true
    },
    options: {
        type: [String],
        required : true,
    },
    catagory: {
        type: String,
        required : true,
    },
    answerKey: {
        type: Number,
        required : true,
    }

}, {
    timestamps: true
   }
)
const Question = mongoose.models.Question || mongoose.model("Question" , QuestionSchema)

export default Question