'use client';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '@/context/AuthContext'

interface QuestionType {
    question: string,
    options: string[],
    answerKey: number,
}

export default function page() {

    const authCont = useContext(AuthContext)
    const [question, SetQuestions] = useState<QuestionType[] | null>(null)

    if (!authCont) {
        throw new Error("Auth context isnt available")
    }

    const { logout } = authCont;

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
        console.log(data);

    }

    useEffect(() => {
        getQuestions()
    }, [])
    console.log(question);


    return (
        <>
            <div className='h-screen bg-[#131313] flex flex-col text-white gap-5 justify-center items-center'>
                <h2>This is user Dashboard</h2>
                <div className='flex flex-col gap-5'>
                {question?.map((p, i) => {
                    return (
                        <div key={i} className='text-white '>
                            <p>{p.question}</p>
                        </div>

                    )
                })}
                      </div>
            </div>
        </>
    )
}


{/* <button onClick={logout} className='text-white bg-blue-700 px-6 py-2 rounded-b-md'>
                  Logout
              </button> */}