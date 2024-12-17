import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BlogProvider } from './blog_context_reducer/blog-context.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BlogProvider>
      <StrictMode>
        <App />
        <ToastContainer
        position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition: Zoom
        />
      </StrictMode>
    </BlogProvider>
  </AuthProvider>
)
