'use client';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '@/context/AuthContext'

interface QuestionType { 
    questionName: string,
    options: string[],
    correctAnswer : number,
}

export default function page() {

    const authCont = useContext(AuthContext)
    const [question,SetQuestions] = useState<QuestionType | null >(null)

    if (!authCont) {
        throw new Error("Auth context isnt available")
    }
    
    const { logout } = authCont;

    async function getQuestions() {
        const body = await fetch('/api/get-questions', {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },  
        }    
        )

        const data = await body.json();
        SetQuestions(data);
    }

    useEffect(() => {
        getQuestions()
    },[])

    
  return (
      <>
          <div className='h-screen bg-[#131313] text-white flex justify-center items-center'>
              <h2>This is user Dashboard</h2>
          </div>
      </>
  )
}


{/* <button onClick={logout} className='text-white bg-blue-700 px-6 py-2 rounded-b-md'>
                  Logout
              </button> */}