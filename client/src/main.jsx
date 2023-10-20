import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from '../../server/dotenv';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
  domain = process.env.>
    
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
