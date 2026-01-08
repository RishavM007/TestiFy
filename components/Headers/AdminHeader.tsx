import React from 'react'
import Link from 'next/link'

interface MenuType {
    name: string
    slug: string
}

export default function AdminHeader() {

    const menuItems: MenuType[] = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "About",
            slug: "/about"
        },
        {
            name: "Quizes",
            slug: "/user-dashboard"
        },

    ]

    return (
        <div className='sticky top-0 z-50 shadow-lg bg-white'>
            <div className="mx-auto max-w-[80%]  px-6 lg:px-8 ">
                <div className="relative flex flex-row h-16 gap-10 w-full">
                    <div className="flex w-[10%] justify-start">
                        <a className="flex shrink-0 justify-center gap-3 items-center" href="/">
                            <img className="block h-8 w-auto" height="32" src="https://www.svgrepo.com/show/303650/neo-logo.svg" />
                            <h2 className='text-3xl font-medium text-green-500 mb-1'>Testi<span className='text-green-800 font-bold'>Fy</span> </h2>
                        </a>
                    </div>
                    <div className='flex w-[70%] justify-center items-center'>
                        <ul className='flex flex-row gap-7 '>
                            {menuItems.map((p, i) => {
                                return (
                                    <Link key={i} href={p.slug} className='relative group'>
                                        <li className='text-black font-dm-sans text-lg font-normal tracking-wide'>{p.name}</li>
                                        <div className='absolute h-px w-0 group-hover:w-full -bottom-0.5 transition-all duration-300 bg-black'></div>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div className=" w-[20%] flex px-2 py-3  items-center space-x-4 flex-1 justify-end justify-self-end ">

                        <Link
                            className="text-gray-700 hover:bg-emerald-600 rounded-md  border border-emerald-700 px-4 py-2 hover:text-white text-sm font-medium" href="/auth/login">
                            Login
                        </Link>
                        <Link className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                            href="/auth/signup">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


