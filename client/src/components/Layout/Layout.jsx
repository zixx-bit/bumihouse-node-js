import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import userDetailContext from '../../context/userDetailsContext';
import { useMutation } from 'react-query';

const Layout = () => {
  const {isAuthethicated, user} = useAuth0()
  const {setUserDetails} = useContext(userDetailContext)

  const {mutate} = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email)
  })
    useEffect(() =>{
      
    }, [isAuthethicated])

  return (
    <>
         <div style={{background: "var(--black)", overflow: "hidden"}}>
            <Header/>
           
        </div>
        <Outlet/>
        <Footer/>
    </>

  );
}

export default Layout; 