'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

interface userTypes{
    name: string,
    username: string,
    email: string,
    password : string
}
type inputType = "text" | "password"

export default function page() {

    const [user, setUser] = useState<userTypes>({
        name: "",
        username: "",
        email: "",
        password : "",
    })

    const [type, setType] = useState<inputType>("password")
    const [loading,setLoading] = useState<boolean>(false)

    const [matchedPass, setMatchedPass] = useState<string>("")

    async function signup() {
        try {
            
        const response = await fetch('/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
          
        })
            
        } catch (error) {
            console.error("Error Caused Why Signing Up")
        }
    }


    return (
        <>
            <div className="min-h-screen overflow-hidden bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto flex flex-col justify-center items-center sm:w-full sm:max-w-md">
                  <img className="block h-14 w-auto" height="32" src="https://www.svgrepo.com/show/303650/neo-logo.svg" alt='Logo' />
                        <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
                            Create a new account
                        </h2>
                        
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form method="POST" action="#">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="name" name="name" placeholder="John Doe" type="text" onChange={(e)=>{setUser({...user , name : e.target.value})}}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-emerald-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                        <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            {/* <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg> */}
                                        </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <span
                                        className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                        iworkedon.com/
                                    </span>
                                    <input id="username" name="username" placeholder="john" type="text" onChange={(e)=>{setUser({...user ,  username : e.target.value})}}
                                        className="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" name="email" placeholder="user@example.com" type="email"  onChange={(e)=>{setUser({...user ,  email : e.target.value})}}

                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-emerald-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        {/* <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg> */}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm relative">
                                    <input id="password" name="password" type={type} placeholder="••••••••"  onChange={(e)=>{setUser({...user ,  password : e.target.value})}}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-emerald-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    {type === "text" ?
                                        <FiEyeOff className='absolute top-1/2 -translate-y-1/2 right-5 text-gray-500 cursor-pointer' onClick={() => {setType('password')}} /> :
                                        <FiEye className='absolute top-1/2 -translate-y-1/2 right-5 text-gray-500 cursor-pointer' onClick={() => { setType('text')}} />
                                    }
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm relative">
                                    <input id="password_confirmation" name="password_confirmation" type="password" placeholder="••••••••" onChange={(e)=> { setMatchedPass(e.target.value)}}
                                        className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue ${ matchedPass === user.password ? "focus:border-emerald-500" :  "focus:border-red-500"}  transition duration-150 ease-in-out sm:text-sm sm:leading-5`} /> 
                                </div>
                            </div>
                            {matchedPass !== user.password ? <div className='mt-3'> <p className='text-xs text-red-600 font-medium'>Passwords do not match</p></div> : ""}

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:border-emerald-800 focus:shadow-outline-indigo active:bg-emerald-700 transition duration-150 ease-in-out">
                                        Create account
                                    </button>
                                </span>
                            </div>
                            <div className='my-5 flex justify-center items-center'>
                                <p className='text-black font-medium text-sm'>Already Have An Account ? {' '}
                                    <Link href={'/auth/login'}>
                                        <span className='font-semibold text-emerald-600'>Login In</span>
                                    </Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
