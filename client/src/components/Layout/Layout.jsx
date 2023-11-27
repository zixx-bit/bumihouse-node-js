import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../../context/userDetailsContext';
import { useMutation } from 'react-query';
import { createUser } from '../../utils/api';

const Layout = () => {
  const {isAuthethicated, user} = useAuth0()
  const {setUserDetails} = useContext(UserDetailsContext)

  const {mutate} = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email)
  })
    useEffect(() =>{     
      isAuthethicated && mutate()      
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