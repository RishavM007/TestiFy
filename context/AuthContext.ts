'use client';
import React from 'react'

export interface UserType {
    id: string
    email: string
    name: string
    username: string
    isVerified: boolean
}


export interface authContextTypes {
    user: UserType | null,
    loading: boolean,
    isLoggedIn : boolean
    login(email: string, password: string): void,
    logout(): void,
}

const AuthContext = React.createContext<authContextTypes | null>(null)

export default AuthContext;