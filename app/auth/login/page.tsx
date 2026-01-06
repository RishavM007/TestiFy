'use client'
import React , {useContext ,useState} from 'react'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'


export default function page() {

  const authcont = useContext(AuthContext)
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  
  if (!authcont) {
    throw new Error("Auth context not available")
  }

  const { login , loading } = authcont;

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div className="sm:mx-auto flex flex-col justify-center items-center sm:w-full sm:max-w-md">
          <img
            className="block h-14 w-auto"
            src="https://www.svgrepo.com/show/303650/neo-logo.svg"
            alt="Logo"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back to <span className="font-semibold text-emerald-600">TestiFy</span>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="user@example.com"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 transition sm:text-sm"
                  />
                </div>
              </div>

          
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 transition sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  onClick={()=>{login(email,password)}}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition"
                >
                  Sign in
                </button>
              </div>

              {/* FOOTER */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-700">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/auth/signup"
                    className="font-semibold text-emerald-600 hover:text-emerald-500"
                  >
                    Create one
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
