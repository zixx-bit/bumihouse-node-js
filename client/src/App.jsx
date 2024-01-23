import "./App.css";
import Website from "./pages/Website";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Toaster} from 'react-hot-toast';
import Property from "./pages/Property/Property";
import UserDetailsContext from "./context/UserDetailsContext";

function App() {

  const queryClient = new QueryClient(); 
  const [userDetails, setUserDetails] = useState ({
    favourites: [],
    bookings: [],
    token: null
  });
  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
    <QueryClientProvider client = {queryClient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route element = {<Layout />}>
        <Route path = "/" element={<Website />}/>
        <Route path = "/Properties">          
        <Route index element={<Properties/>}/>
        <Route path = ":propertyId" element={<Property/>}/>
        </Route>
        </Route>            
      </Routes>
    </Suspense>
  </BrowserRouter>
  <Toaster  toastOptions={{
    success:{
      duration: 4000,
      style: {
        margin: 'auto',
        borderRadius: '10px',
        background: '#333',
        color: '#0FFF50',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    error:{
      style:{
        // background: 'black',
        color: 'red'
      },
    }
  }}>

  </Toaster>

    <ToastContainer/>
  <ReactQueryDevtools initialIsOpen = {false}/>
</QueryClientProvider>  
</UserDetailsContext.Provider>
  );  
}

export default App;
