import "./App.css";

import Website from "./pages/Website";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route element = {<Layout />}>
        <Route path = "/" element={<Website />}/>
        </Route>            
      </Routes>
    </Suspense>
  </BrowserRouter>

  );
}

export default App;
