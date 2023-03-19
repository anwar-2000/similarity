"use client"

import React, { useState } from 'react'
import Button from '@/ui/Button'
import { signOut } from 'next-auth/react'
import { toast } from '@/ui/Toast'

interface Props {}

const SignOutButton = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const SignOutWithGoogle = async () =>{
        setIsLoading(true)

        try {
            await signOut()
        } catch (error) {
            toast({
               title : "Error signing out",
               message : "Please try again later",
               type : 'error',
           })
        }
    }
  return <Button onClick={SignOutWithGoogle} isLoading={isLoading}>Sign Out</Button>
}

export default SignOutButton