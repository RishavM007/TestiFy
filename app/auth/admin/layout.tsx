import React, { ReactNode } from 'react'
import AdminHeader from '@/components/Headers/AdminHeader'

export default function Layout({children} : {children : ReactNode}) {
  return (
      <>
          <main>
             
              {children}
          </main>
      </>
  )
}

