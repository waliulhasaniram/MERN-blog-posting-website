import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useAuth } from "../store/auth"

const BlogWrite =()=>{
    const [blogs, setBlogs] = useState({username:'', email:'', blog:''})
    
    const [useAvailable, setUserAvailable] = useState(true)
    const {user} = useAuth()
    useEffect(()=>{
        if(useAvailable && user){
            setBlogs({username: user.username, email: user.email, bloh:''})
            setUserAvailable(false)
        }
    },[useAvailable])


    const handelchange =(e)=>{
        const name = e.target.name 
        const value = e.target.value
        setBlogs({...blogs, [name]:value})
    }

    const handelsubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/main/blog', {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(blogs)
            })
             const res_data = await response.json()   
            if(response.ok){
                toast.success('blog saved')
                setBlogs({username:'', email:'', blog:''})
            }else{
                toast.error('sorry! cannot save your blog.')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <div className="reg_container">
            <div className="regForm">
                <form onSubmit={handelsubmit}>
                    <h1>Write your blog here </h1>
                    <div className="input_div">
                        <label>username: </label><br/>
                        <input type="text" name="username" placeholder="username" id="username" value={blogs.username} onChange={handelchange} required />
                    </div>
                    <div className="input_div">
                        <label>Email: </label><br/>
                        <input type="email" name="email" placeholder="email" id="email" value={blogs.email} onChange={handelchange} required />
                    </div>
                    <div className="input_div">
                        <label>Blog: </label><br/>
                        <textarea className="blogwrite" type="text" name="blog" placeholder="blog" id="blog" value={blogs.blog} onChange={handelchange} required></textarea>
                    </div>
                    <div className="input_div">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </div> 

    </>
}

export default BlogWrite