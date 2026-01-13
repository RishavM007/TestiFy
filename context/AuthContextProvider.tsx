'use client';
import React, { ReactNode, useState } from 'react'
import AuthContext from './AuthContext'
import { UserType } from './AuthContext'
import { useRouter } from 'next/navigation'

export default function AuthContextProvider({ children }: { children: ReactNode }) {

  const router = useRouter()

  const [user, setUser] = useState<UserType | null>(null)


  const isLoggedIn = user !== null;

  
  const [loading, setLoading] = useState<boolean>(false)


  const login = async (email : string , password : string) => {

    try {

      setLoading(true)

      const requestBody = await fetch('/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password})
      })

      const data = await requestBody.json();
      
      if (!data.ok) {
        alert("Login Failed");
        return
      }
      
      setUser(data.user);

      router.push('/user-dashboard')

    } catch (error) {
      console.error("Login Unsuccessful", error);
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      const requestBody = await fetch('/api/auth/logout', {
        method: "GET"
      })
      if (!requestBody.ok) {
        alert("Logout Failed")
      }
      
      router.push('/auth/login')

    } catch (error) {
      console.error("Logout Failed", error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AuthContext.Provider value={{user,login,logout, isLoggedIn, loading}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
