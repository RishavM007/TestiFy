'use client'

import AuthContextProvider from "@/context/AuthContextProvider"
import AdminHeader from "@/components/Headers/AdminHeader"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <AdminHeader />
      {children}
    </AuthContextProvider>
  )
}
