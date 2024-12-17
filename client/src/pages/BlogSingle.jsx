import { useLocation, NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../store/auth"

const BlogSingle =()=>{  // this page shows the logged in users blog with update and delete feature
    const {authenticationToken} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
   // const id = location.state._id
    const {username, email, blog} = location.state

    //delete blog 
    const deleteTheBlog =async()=>{
        try {
            const response = await fetch(`http://localhost:3000/api/main/blog/delete/${location.state._id}`, {
                method: "DELETE",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                toast.success("blog delete")
                navigate('/blog')
            }else{
                toast.error("delettion failed")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return <>
         
        <div className="blog_container">
            <h2> <b>Author name:</b> {username}</h2>
            <h3>{email}</h3>
            <p>{blog}</p>

            <div className="button">
                <NavLink to={`/blog/update/${location.state._id}`}> <button>update</button></NavLink>
                <button onClick={()=> {deleteTheBlog()}}>delete</button>
            </div>
        </div>
    </>
}

export default BlogSingle