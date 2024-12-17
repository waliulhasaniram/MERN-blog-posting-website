import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './layout/Navbar'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Footer from './pages/Footer'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import BlogWrite from './pages/BlogWrite'
import BlogSingle from './pages/BlogSingle'
import AdminLayout from './pages/adminPage/Admin-layout'
import AdminUser from './pages/adminPage/Admin-user'
import AdminContact from './pages/adminPage/Admin-contact'
import AdminBlog from './pages/adminPage/Admin-blog'
import ErrorPage from './pages/Error'
import AdminUserUpdate from './pages/adminPage/Admin-userUpdate'
import BlogUpdate from './pages/BlogUpdate'
import BlogViewOnly from './pages/BlogViewOnly'

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar />
          <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='*' element={<ErrorPage />}/>
             <Route path='/about' element={<About />}/>
             <Route path='/contact' element={<Contact />}/>

             <Route path='/blog' element={<Blog />}/>
             <Route path='/blog/blogviewonly/:id' element={<BlogViewOnly />}/>
             <Route path='/blogwrite' element={<BlogWrite />}/>
             <Route path='/blog/:id' element={<BlogSingle />}/>
             <Route path='/blog/update/:id' element={<BlogUpdate />}/>

             <Route path='/register' element={<Registration />}/>
             <Route path='/login' element={<Login />}/>
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/profile' element={<Profile />}/>

             <Route path='/admin' element={<AdminLayout />}>
                  <Route path='users' element={<AdminUser />}/>
                  <Route path='contacts' element={<AdminContact/>}/>
                  <Route path='blogs' element={<AdminBlog />}/>
                  <Route path='users/update/:id' element={<AdminUserUpdate />}/>
             </Route>
          </Routes>
          
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
