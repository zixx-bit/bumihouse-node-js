import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailsContext from "../../context/UserDetailsContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";

const Layout = () => {

  useFavourites() 
  
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailsContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });
  useEffect(() => {    
    const getTokenAndRegister = async () => { 
      try {   
      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "https://dev-8mti7gqox7uzcewe.us.auth0.com/api/v2/",
          scope: "openid profile email",
        },
      })
    
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res);
      console.log("access_token", res)

      }     
      catch (error) {
        console.error("Error getting access token:", error);
      }
    }

    isAuthenticated && getTokenAndRegister();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />*
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
