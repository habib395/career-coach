import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>
      <ToastContainer />
      </AuthProvider> 
    </HelmetProvider>
  </StrictMode>
); 
