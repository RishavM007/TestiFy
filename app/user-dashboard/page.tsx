'use client';
import QuestionCatagory from '@/components/User/QuestionCatagory';
import QuestionSolvingArea from '@/components/User/QuestionSolvingArea';
import React, { useContext, useEffect, useState } from 'react'

interface QuestionType {
      question: string,
    answerOptions: string[],
    correctAnswer: string,
    category: string,
}

export default function page() {
    const [question, SetQuestions] = useState<QuestionType[] | null>(null)
    const [questionCat,setQuestionCat] = useState<string>("")

    async function getQuestions() {
        const body = await fetch('/api/get-questions', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
        )
        const data = await body.json();
        SetQuestions(data.data);
    }

    useEffect(() => {
        getQuestions()
    }, [])

    // console.log(question);
    


    return (
        <>
            <section className='flex flex-col lg:flex-row justify-center items-center'>
            <QuestionCatagory questions={question} setQuestionCat={setQuestionCat} />
            <QuestionSolvingArea questions={question} questionCat={questionCat}/>

            </section>
            
        </>
    )
}


{/* <button onClick={logout} className='text-white bg-blue-700 px-6 py-2 rounded-b-md'>
                  Logout
              </button> */}