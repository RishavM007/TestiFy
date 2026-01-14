import React, { useEffect, useState } from 'react'

interface QuestionType {
  question: string,
  answerOptions: string[],
  correctAnswer: string,
  category: string,
}

interface Props {
  questions: QuestionType[] | null,
  questionCat: string,
}

export default function QuestionSolvingArea({ questions, questionCat }: Props) {

  const [filteredQuestions, setFilteredQuestions] = useState<QuestionType[] | null>(null)
useEffect(() => {
  setFilteredQuestions(
    questions?.filter(
      (q) => q.category === questionCat
    ) || null
  )
}, [questionCat, questions])


  console.log(filteredQuestions);
  

  return (
    <section className='bg-gray-100 min-h-screen  flex justify-center items-center w-[80%]'>
      {/* <p className='text-2xl text-black'>{questionCat}</p> */}
      <div>
        {filteredQuestions?.map((p, i) => {
          return (
            <div key={i}>
              {p.question}
            </div>
          )
        })}
      </div>

    </section>
  )
}
