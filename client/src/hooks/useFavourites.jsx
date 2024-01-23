import React, { useContext, useEffect } from 'react'
import UserDetailsContext from '../context/UserDetailsContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from 'react-query'

const useFavourites = () => {
  const {userDetails, setUserDetails} = useContext(UserDetailsContext)
  const {user} = useAuth0()
  const queryRef = useRef()

  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: "allFavorites",
    queryFn: () => getAllFav(user?.email, userDetails?.token),
    onSuccess: (data) =>
      setUserDetails((prev) =>({...prev, favouries:data})),
      enabled: user !== undefined,
    staleTime: 30000,
    })

    queryRef.current = refetch;

    useEffect(() =>{
      queryRef.current 
    })
    
  
  return {}
}

export default useFavourites
