import React, { useEffect, useState } from 'react'
import bgimage from '@/assets/blue.jpg'

export interface questionType {
    questionName: string,
    answerOptions: string[],
    correctAnswer: string,
}

interface propType {
    setQuestions: React.Dispatch<React.SetStateAction<questionType[] | null>>
}

export default function AdminInputForm({ setQuestions }: propType) {

    const [closeSubmit, setCloseSubmit] = useState<boolean>(true)

    const [question, setQuestion] = useState<questionType>({
        questionName: "",
        answerOptions: [""],
        correctAnswer: ""
    })

    function handleSubmit() {
        setQuestions(prev => {
            if (!prev) {
                return [question]
            }
            return [...prev, question]
        })

        // alert("Thank You For Submitting Your question")
        setQuestion({ ...question, questionName: "", answerOptions: [""], correctAnswer: "" })
    }

    useEffect(() => {
        if (question.questionName.length > 8 && question.answerOptions.length > 1 && question.correctAnswer.length > 0 && Number(question.correctAnswer) <= question.answerOptions.length && Number(question.correctAnswer) > 0) {
            setCloseSubmit(false)
        }
        else {
            setCloseSubmit(true)
        }
    }, [question])

    console.log(question);

    return (
        <div className='w-1/3 h-screen overflow-hidden relative flex flex-col items-center justify-center gap-4' style={{ backgroundImage: `url(${bgimage.src})` }}>
            <h2 className='text-white font-sora text-4xl font-semibold capitalize'>Create a new question</h2>
            <p className='text-lg font-dm-sans text-center max-w-xl text-white'>Fill the form to add a question. It will appear on the left as a draft.</p>
            <div className='w-[80%] bg-white rounded-2xl shadow-2xl p-7 mx-auto'>
                <div className='flex mx-auto flex-col gap-2'>
                    <label htmlFor="question" className='text-black font-semibold text-lg '>Type Your Question</label>
                    <input type="text" value={question.questionName} name="question" id="" className='outline-1 h-10 outline-black/50 rounded-lg pl-4' onChange={(e) => { setQuestion({ ...question, questionName: e.target.value }) }} placeholder='What is the primary purpose of React’s useEffect hook?' />
                </div>
                <div className='mt-5'>
                    <p className='text-black font-semibold text-lg '>Enter the Options</p>
                    <ul>
                        {question.answerOptions.map((p, i) => {
                            return (
                                <li className='w-full parent_cont flex flex-col gap-3 mt-4'>
                                    <label htmlFor="optionText1" className='text-black font-semibold text-sm '>Option {i + 1}</label>
                                    <input type="text" name="optionText1" id="" className='outline-1 h-10 w-full outline-black/50 rounded-lg pl-4'

                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setQuestion(prev => {
                                                const updatedOptions = [...prev.answerOptions];
                                                updatedOptions[i] = value;

                                                return {
                                                    ...prev,
                                                    answerOptions: updatedOptions,
                                                };
                                            });
                                        }}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                    <div className='flex gap-4 mt-3 justify-end flex-row '>
                        <p className='text-blue-600 add_button font-medium font-sora cursor-pointer' onClick={() => { setQuestion(prev => ({ ...prev, answerOptions: [...prev.answerOptions, " "] })) }}>Add</p>
                        <p className='text-red-600 delete_button font-medium font-sora cursor-pointer' onClick={() => { setQuestion(prev => ({ ...prev, answerOptions: prev.answerOptions.slice(0, -1) })) }} >Delete</p>
                    </div>
                </div>
                {question.answerOptions.length > 1 ? <div className='flex mx-auto flex-col mt-5 gap-2'>
                    <label htmlFor="question" className='text-black font-semibold text-lg '>Correct Answer</label>
                    <input type="text" name="question" id="" className='outline-1 h-10 outline-black/50 rounded-lg pl-4'
                        onChange={
                            (e) => {
                                setQuestion({ ...question, correctAnswer: e.target.value })
                            }}
                        placeholder='Eg : "1" or "2", Without Quotes' />
                </div> : <></>}

                { Number(question.correctAnswer) > question.answerOptions.length || Number(question.correctAnswer) <= 0 ? <p className='text-lg font-sora text-red-600 mt-3'>Answer should be withine the range of the options</p> : <></>}

                <div className='w-full mt-8'>
                    {closeSubmit ? <button className='w-full text-white bg-gray-300 font-sora py-3 rounded-lg' disabled>
                        Submit Question
                    </button> : <button className='w-full text-white bg-emerald-700 cursor-pointer font-sora py-3 rounded-lg' onClick={handleSubmit}>
                        Submit Question
                    </button>}
                </div>

            </div>
        </div>
    )
}

