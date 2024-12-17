import {NavLink, Navigate, Outlet} from 'react-router-dom'
import { useAuth } from '../../store/auth'

const AdminLayout =()=>{
    const {user, isLoading} = useAuth()
    //console.log('admin layout',user)
    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return <>
        <header>
            <div className="admin_navbar">
                <nav>
                    <ul>
                        <li><button> <NavLink to="/admin/users">user</NavLink></button></li><br/>
                        <li><button><NavLink to="/admin/contacts">contact</NavLink></button></li><br/>
                        <li><button><NavLink to="/admin/blogs">blogs</NavLink></button></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
    </>
}
export default AdminLayout