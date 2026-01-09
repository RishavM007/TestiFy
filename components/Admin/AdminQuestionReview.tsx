'use client';
import React, { useState } from 'react'
import { questionType } from './AdminInputForm'
import { MdOutlineDelete } from "react-icons/md";

export default function AdminQuestionReview({ questions, setQuestions }: { questions: questionType[] | null, setQuestions: React.Dispatch<React.SetStateAction<questionType[] | null>> }) {

    const [loading, setLoading] = useState<boolean>(false)

    function deleteQuestion(index: number) {
        setQuestions(prev => {         
            if (!prev) return prev;

            const next = [...prev];
            for (let i = index; i < next.length - 1; i++) {
                next[i] = next[i + 1];
            }
            next.length--;

            return next;
        });
    }


    async function handleSubmit() {
        try {

            if (questions?.length === 0) {
                console.log("Please add a question to submit");
                return
            }

            setLoading(true)

            const body = await fetch('/api/submit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(questions)
            })

            const data = await body.json();

            if (!data.ok) {
                console.error("Error sending Questions" ,data);
                return
            }

            setLoading(false)
            console.log("Questions Submitted Successfully");
            


        } catch (error) {
            console.error("Backend Call for sending Questions Failed", error);
        } finally {
            setQuestions(null)
            setLoading(false)
        }

    }

    return (
        <>
            <div className='w-2/3 flex flex-col justify-between gap-10 shadow-2xl h-screen p-10'>
                <div className=' flex flex-col gap-10' >
                    <div className='flex flex-col justify-start '>
                        <h2 className='text-3xl font-sora'>Hi Admin,</h2>
                        <p className='font-dm-sans text-lg text-left'>Please Review your questions here before submitting</p>
                    </div>
                    {questions &&
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-xl font-semibold font-sora'>Your Questions : </h2>
                            <ul className='flex flex-col gap-5'>
                                {questions?.map((p, i) => {
                                    return (<>
                                        <li className=' flex flex-row gap-5 items-center justify-between  bg-emerald-800 rounded-2xl text-white font-dm-sans text-xl'>
                                            <div className='flex flex-row gap-5 items-center'>
                                                <span className='py-3 px-5 border border-r rounded-l-2xl border-gray-300 text-emerald-800 bg-white'>{i + 1}</span>
                                                <p className=''>{p.questionName[p.questionName.length - 1] === "?" ? p.questionName : p.questionName + " ?"}</p>
                                            </div>
                                            <div className='px-5'>
                                                <MdOutlineDelete className='text-white cursor-pointer ' onClick={() => { deleteQuestion(i) }} />
                                            </div>
                                        </li>

                                    </>)
                                })
                                }
                            </ul>
                        </div>}
                </div>

                <button onClick={handleSubmit} className='w-fit px-8 text-white bg-emerald-700 cursor-pointer font-sora py-3 rounded-lg'>{loading ? "Loading..." : "Submit Your Questions"}</button>
            </div>
        </>

    )
}
