'use client';
import React, { useContext } from 'react'
import AuthContext from '@/context/AuthContext'

export default function page() {

    const authCont = useContext(AuthContext)

    if (!authCont) {
        throw new Error("Auth context isnt available")
    }
    
    const { logout } = authCont;

    
  return (
      <>
          <div className='h-screen bg-[#131313] text-white flex justify-center items-center'>
              <h2>This is user Dashboard</h2>
              <button onClick={logout} className='text-white bg-blue-700 px-6 py-2 rounded-b-md'>
                  Logout
              </button>
          </div>
      </>
  )
}
