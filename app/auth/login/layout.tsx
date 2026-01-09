import React, { ReactNode } from 'react'
import AdminHeader from '@/components/Headers/AdminHeader'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Layout({ children }: { children: ReactNode }) {
    
    
  return (
      <>
          <main className='relative'>
              
              {children}
          </main>
      </>
  )
}

