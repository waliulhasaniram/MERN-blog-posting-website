import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

const BlogUpdate =()=>{
    const navigate = useNavigate()
    const {authenticationToken} = useAuth()
    const params = useParams()
    console.log(params)
    const [updateBlog, setUpdateBlog] = useState({username:'', email:'', blog:''})

    const getSingleBlogData =async()=> { // get data to set in the update input
        try {
            const response = await fetch(`http://localhost:3000/api/main/blog/getblog/${params.id}`,{
                method: "GET",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                const res_data = await response.json()
                setUpdateBlog(res_data.theBlogData)
                
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getSingleBlogData()
    },[])
    
    const handelChange =(e)=> {
        const name = e.target.name 
        const value = e.target.value 
        setUpdateBlog({
            ...updateBlog,
            [name] : value
        })
    }
    const handelSubmit =async(e)=> { // update blog
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/main/blog/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                    Authorization : authenticationToken
                },
                body: JSON.stringify(updateBlog)
            })
            if(response.ok){
                toast.success("blog updated")
            }else{
                toast.error("update error")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <div className="reg_container">
            <div className="regForm">
                <form onSubmit={handelSubmit}>
                    <h1>update your blog </h1>
                    <div className="input_div">
                        <label>username: </label><br/>
                        <input type="text" name="username" placeholder="username" id="username" value={updateBlog.username} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Email: </label><br/>
                        <input type="email" name="email" placeholder="email" id="email" value={updateBlog.email} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Blog: </label><br/>
                        <textarea className="blogwrite" type="text" name="blog" placeholder="blog" id="blog" value={updateBlog.blog} onChange={handelChange} required></textarea>
                    </div>
                    <div className="input_div">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div> 
    </>
}

export default BlogUpdate