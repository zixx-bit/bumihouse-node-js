import "./App.css";

import Website from "./pages/Website";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query'

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
        </Route>            
      </Routes>
    </Suspense>
  </BrowserRouter>
</QueryClientProvider>
  
  );
}

export default App;
