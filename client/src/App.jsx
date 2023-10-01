import "./App.css";

import Website from "./pages/Website";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Toaster} from 'react-hot-toast';
import Property from "./pages/Property/Property";

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client = {queryClient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route element = {<Layout />}>
        <Route path = "/" element={<Website />}/>
        <Route path = "/Properties" element = {<Properties/>}>          
        </Route>
        <Route path = ":propertyId" element={<Property/>}/>
        </Route>            
      </Routes>
    </Suspense>
  </BrowserRouter>
  <Toaster/>
  <ToastContainer/>
  <ReactQueryDevtools initialIsOpen = {false}/>
</QueryClientProvider>  
  );
}

export default App;
