"use client"

import React, { useState } from 'react'
import Button from '@/ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from '@/ui/Toast'

interface Props {}

const SignInButton = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const SignInWithGoogle = async () =>{
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
          toast({
            title: "Login Success",
            message: "You have successfully logged in.",
            type: "success",
            duration: 5000,
          });
        }
    }
  return <Button onClick={SignInWithGoogle} isLoading={isLoading}>Sign in</Button>
}

export default SignInButton