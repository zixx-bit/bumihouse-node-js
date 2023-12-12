import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import toast from 'react-hot-toast'

const useAuthCheck = () => {

    const {isAuthenticated} = useAuth0()
    const validateLogin = () =>{
        if (!isAuthenticated) {
            toast.error ("You must be loggged in", {position: "top-center"})
            return false
        } else{
            return true
        }
    }
  return (
    {
        validateLogin
    }
  )
}

export default useAuthCheck