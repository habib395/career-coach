import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './utils/router.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>
    <Toaster />
    </AuthProvider>
  </StrictMode>,
)
