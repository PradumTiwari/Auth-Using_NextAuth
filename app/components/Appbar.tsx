"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import React from 'react'

const Appbar = () => {
    const session=useSession();
  return (
    <div>Main Components
        <button onClick={()=>{
            // router.push("/api/auth/signin")
            signIn();
        }} >SignIn</button>
        {JSON.stringify(session)}
    </div>
  )

}

export default Appbar