import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { Navigate, NavLink } from "react-router-dom"

const Profile =()=>{
    const [userBlogOnly, setUserBLogOnly] = useState([])
    const {user, authenticationToken, isLoggedIn} =useAuth()


    // user logged in user's blogs only
    const getOnlyUserBlog =async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/main/getuserblogonly',{
                method: "GET",
                headers: {Authorization : authenticationToken}
            })
            const res_data = await response.json()
            if(response.ok){
                setUserBLogOnly(res_data.blogEmail)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getOnlyUserBlog()
    },[])
    
    // console.log(userBlogOnly)
    
    return <>
    {isLoggedIn ? (<>

        <h1>user profile</h1>
        <div className="reg_container">
            <div className="regForm">
                    <h1>User data</h1>
                    <div className="prfile_data">
                        <h2>Username: </h2>
                        <h2>{user.username}</h2>
                    </div>
                    <div className="prfile_data">
                        <h2>Email: </h2>
                        <h2>{user.email}</h2>
                    </div>
                    <div className="prfile_data">
                        <h2>Phone: </h2>
                        <h2>{user.phone}</h2>
                    </div>                
            </div>
        </div> 

        <h1>Your blogs</h1>
        
        <div className="blog_section">
            {Array.isArray(userBlogOnly) && userBlogOnly.map((curElem, index)=>{
                return <div key={index}>
                            <NavLink to={`/blog/${curElem._id}`} state={{...curElem}}>
                                <div className="blog_card">
                                    <div className="blog_card_head">
                                        <div className="blog_card_title">
                                            <h3>Name: {curElem.username}</h3>
                                            <h4>Email: {curElem.email}</h4>
                                        </div>
                                    </div>    
                                    <div>
                                        <p>{curElem.blog.slice(0, 50)} ...see more</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
            })}
        </div>

    </>) : (<Navigate to="/login"/>)}
        
    </>
}

export default Profile