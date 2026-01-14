import React from 'react'
import {
    FaHistory,
    FaLandmark,
    FaGlobe,
    FaBook,
    FaCode,
    FaBrain,
    FaBalanceScale,
    FaLeaf,
    FaChartLine,
    FaFlask,
    FaShieldAlt,
    FaLaptopCode,
    FaUserTie,
    FaCloud,
    FaDatabase,
    FaMicrochip,
    FaNewspaper
} from "react-icons/fa"


interface QuestionType {
    question: string,
    answerOptions: string[],
    correctAnswer: string,
    category: string,
}

interface questionArrayType {
    questions: QuestionType[] | null,
    setQuestionCat : React.Dispatch<React.SetStateAction<string>>,
}

export default function QuestionCatagory({ questions , setQuestionCat }: questionArrayType) {

    console.log(questions);

    const categories = [
        { name: "Analytics", icon: <FaChartLine /> },
        { name: "Biology", icon: <FaFlask /> },
        { name: "Business", icon: <FaUserTie /> },
        { name: "Cloud", icon: <FaCloud /> },
        { name: "Computer Basics", icon: <FaLaptopCode /> },
        { name: "Current Affairs", icon: <FaNewspaper /> },
        { name: "Data Science", icon: <FaDatabase /> },
        { name: "Design", icon: <FaBrain /> },
        { name: "DevOps", icon: <FaMicrochip /> },
        { name: "Economy", icon: <FaChartLine /> },
        { name: "Environment", icon: <FaLeaf /> },
        { name: "Ethics", icon: <FaBalanceScale /> },
        { name: "General Knowledge", icon: <FaBook /> },
        { name: "Geography", icon: <FaGlobe /> },
        { name: "History", icon: <FaHistory /> },
        { name: "Interview Prep", icon: <FaUserTie /> },
        { name: "Maths", icon: <FaBrain /> },
        { name: "Networking", icon: <FaCloud /> },
        { name: "Physics", icon: <FaFlask /> },
        { name: "Polity", icon: <FaLandmark /> },
        { name: "Programming", icon: <FaCode /> },
        { name: "Science", icon: <FaFlask /> },
        { name: "Security", icon: <FaShieldAlt /> },
        { name: "Soft Skills", icon: <FaUserTie /> },
        { name: "System Design", icon: <FaMicrochip /> },
        { name: "UPSC", icon: <FaBook /> }
    ].sort((a, b) => a.name.localeCompare(b.name))


    return (
        <section className='bg-white w-[25%] flex flex-col gap-5 p-10'>
            <h2 className='text-3xl font-sora'>Hello User,</h2>
            <p className='font-dm-sans text-lg text-left'>please select the type of questions you want to attempt</p>
            <ul className='flex flex-wrap gap-3 mt-5 text-black'>
                {categories.map((cat, i) => {
                    return (
                        <li
                         key={i} onMouseDown={()=>{setQuestionCat(cat.name)}}  className='h-10 border rounded-full bg-emerald-600 hover:bg-emerald-800 text-white  px-4 flex items-center justify-start w-fit gap-5 cursor-pointer'
                        >
                            <span className='text-lg'>{cat.icon}</span>
                            <span>{cat.name}</span>
                            <span>{questions?.filter((q)=> q.category === cat.name).length}</span>
                        </li>
                    )
                })}
            </ul>

        </section>
    )
}
