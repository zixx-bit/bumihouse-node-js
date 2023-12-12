import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import toast from 'react-hot-toast'

const useAuthCheck = () => {

    const {isAuthenticated} = useAuth0()
    const validateLogin = () =>{
        if (!isAuthenticated) {
            toast.error ("You must be loggged in")
        }

    }

  return (
    {
        validateLogin
    }
  )
}

export default useAuthCheck