import { useLocation, NavLink } from "react-router-dom"

const BlogViewOnly =()=>{  // this page shows the logged in users blog with update and delete feature
    const location = useLocation()
   // const id = location.state._id
    const {username, email, blog} = location.state
    return <>
         
        <div className="blog_container">
            <h2> <b>Author name:</b> {username}</h2>
            <h3>{email}</h3>
            <p>{blog}</p>

            <div className="button">
                <NavLink to="/blog"> <button>go back</button></NavLink>
            </div>
        </div>
    </>
}

export default BlogViewOnly