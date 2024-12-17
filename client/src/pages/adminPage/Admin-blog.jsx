import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"
import {NavLink} from 'react-router-dom'

const AdminBlog =()=>{
    const [blogsData, setBlogsData] = useState([])
    const {authenticationToken} = useAuth()

    const getAllBlog =async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/admin/blogs', {
                method: "GET",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                const res_data = await response.json()
                //console.log(res_data)
                setBlogsData(res_data.allBlogsData)    
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllBlog()
    },[])
///detele one blog

    const deleteOneblog =async(id)=>{
        try {
            const response = await fetch(`http://localhost:3000/api/admin/blogs/${id}`, {
                method: "DELETE",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                getAllBlog()
            }
        } catch (error) {
            console.log(error)
        }
    }


    return <>
        <h1 className="adminH1">admin blog dashboard</h1>
        <div className='adminUser'>
     

        <table border={3} className='adminUserTable'>
            <thead>
                <th>Username</th>
                <th>Email</th>
                <th>Blog</th>
                <th>Delete</th>
            </thead>
            <tbody>
                    {Array.isArray(blogsData) && blogsData.map((curElem, index) => {
                        return(
                            <tr key={index}>
                                <td>{curElem.username}</td>
                                <td>{curElem.email}</td>
                                <td>{curElem.blog.slice(0, 30)} <NavLink to={`/blog/blogviewonly/${curElem._id}`} state={{...curElem}}>...See More</NavLink></td>
                                <td><button onClick={()=> {deleteOneblog(curElem._id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    
    </div>
    </>
}

export default AdminBlog