"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';


const Provider = ({children}) => {

    const {user} =  useUser();

    useEffect(() => {
        user&&VerifyUser();
    
    },[user])
    
    const VerifyUser= async () =>{
        // logic to verify user
       const dataResult = await axios.post('api/verify-user',{user:user})
       console.log(dataResult.data)
   }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
