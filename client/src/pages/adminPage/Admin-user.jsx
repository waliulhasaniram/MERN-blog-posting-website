import { useEffect, useState } from "react"
import {useAuth} from '../../store/auth'
import { NavLink, Link } from "react-router-dom"

const AdminUser =()=>{
    const [users, setUsers] = useState([])
    const {authenticationToken} = useAuth()
    
    const getAllUsers =async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/admin/users', {
                method: "GET",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                const res_data = await response.json()
                // console.log(res_data)
                setUsers(res_data.allUserData)
            }            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllUsers()
    },[])

    //delete user
    const deleteUser =async(id)=>{
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
                method: "DELETE",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                getAllUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return <>
        <h1 className="adminH1">Admin user dashboard</h1>
        <div className='adminUser'>
      
      <table border={3} className='adminUserTable'>
        <thead>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
        </thead>
        <tbody>
                {Array.isArray(users) && users.map((curElem, index) => {
                    return(
                        <tr key={index}>
                            <td>{curElem.username}</td>
                            <td>{curElem.email}</td>
                            <td>{curElem.phone}</td>
                            <td><NavLink to={`/admin/users/update/${curElem._id}`} state={{...curElem}}>  <button>Edit</button> </NavLink></td>
                            <td><button onClick={()=> {deleteUser(curElem._id)}}>Delete</button></td>
                        </tr>
                    )
                })}
        </tbody>
      </table>
    
    </div>
    </>
}

export default AdminUser