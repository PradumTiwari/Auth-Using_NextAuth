"use client"
import { useRouter } from "next/navigation"
import React from 'react'

const Appbar = () => {
    const router=useRouter();
  return (
    <div>Main Components
        <button onClick={()=>{
            router.push("/api/auth/signin")
        }} >SignIn</button>
    </div>
  )
}

export default Appbar