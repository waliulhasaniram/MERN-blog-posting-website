import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"
import {toast} from "react-toastify"

const Blog =()=>{
    const {isLoggedIn} = useAuth()
    const [allBlog, setAllBlog] = useState([])

    const getAllBlogs =async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/main/getblog', {
                method:"GET"
            })   
            if(response.ok){
                const res_blog = await response.json()
                setAllBlog(res_blog.allBlogData)
            }         
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllBlogs()
    },[])

    return <>
        <div className="blogWrite_div">
            <h1>Write a new blog:</h1>
            {isLoggedIn ? (<NavLink to="/blogwrite"><button className="start_write">start writting</button></NavLink> ) : 
            (<>
                <NavLink to="/login"><button className="start_write">start writting</button></NavLink>
            </>)}
            
        </div>

        {/* show blogs to everyone but, after click, if user is logged in then goto single blog page else goto login */}
        <div className="blog_section">
                {Array.isArray(allBlog) && allBlog.map((curElem, index)=>{
                    return <div key={index}>
                                {isLoggedIn ? (
                                    <NavLink to={`/blog/blogviewonly/${curElem._id}`} state={{...curElem}}>
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
                                ) : (
                                    <NavLink to="/login">
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
                                )}

                            </div>
                })}
        </div>
    </>
}

export default Blog