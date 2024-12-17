import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../store/auth"
import { toast } from "react-toastify"

const AdminUserUpdate =()=>{
    const {authenticationToken} = useAuth()
    const naigate = useNavigate()

    const location = useLocation()
    const [userUpdata, setUserUpdata] = useState({username:'', email:'', phone:''})
    console.log(location.state._id)

    useEffect(()=>{
        setUserUpdata({username: location.state.username, email: location.state.email, phone:location.state.phone})
    },[])

    const handelChange =(e)=>{
        const name = e.target.name 
        const value = e.target.value
        setUserUpdata({
            ...userUpdata,
            [name]:value
        })
    }
    const handelSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/update/${location.state._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization : authenticationToken
                },
                body: JSON.stringify(userUpdata)
            })
            if(response.ok){
                toast.success("data updated successfully")
                naigate('/admin/users')
            }else{
                toast.error("cannot update data")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <div className="reg_container">
            <div className="regForm">
                <form onSubmit={handelSubmit}>
                    <h1>admin user update form</h1>
                    <div className="input_div">
                        <label>Username: </label><br/>
                        <input type="text" name="username" placeholder="username" id="username" value={userUpdata.username} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Email: </label><br/>
                        <input type="email" name="email" placeholder="email" id="email" value={userUpdata.email} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Phone: </label><br/>
                        <input type="number" name="phone" placeholder="phone" id="phone" value={userUpdata.phone} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default AdminUserUpdate