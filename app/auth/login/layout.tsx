import React, { ReactNode } from 'react'
import AdminHeader from '@/components/Headers/AdminHeader'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Layout({ children }: { children: ReactNode }) {
    
    const cookieBody = await cookies();
    const token = cookieBody.get('token')

    if (token) {
        redirect('/')
    }
    
  return (
      <>
          <main className='relative'>
              <AdminHeader />
              {children}
          </main>
      </>
  )
}

