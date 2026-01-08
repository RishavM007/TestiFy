'use client';
import AdminInputForm from '@/components/Admin/AdminInputForm'
import AdminQuestionReview from '@/components/Admin/AdminQuestionReview';
import React, { useState } from 'react'

interface questionArrayType {
  questionName: string,
  answerOptions: string[],
  correctAnswer: string,
}

export default function page() {

  const [questions, setQuestions] = useState<questionArrayType[] | null>(null)

  console.log(questions);


  return (
    <>
      <section className='h-screen w-full flex flex-col-reverse md:flex-row gap-0'>
        <AdminQuestionReview questions={questions}  setQuestions={setQuestions} />
        <AdminInputForm setQuestions={setQuestions} />
      </section>
    </>
  )
}
