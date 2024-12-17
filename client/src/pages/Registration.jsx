import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import {toast} from 'react-toastify'

const Registration =()=> {
    const navigate = useNavigate()
    const [user, setUser] = useState({username:'', email:'', password:'', phone:''})
    const {storeTokenInLocalstorage} = useAuth()

    const handelChange =(e)=>{
        const name = e.target.name 
        const value = e.target.value

        setUser({
            ...user,
            [name]:value
        })
    }

    const handelSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(user)
            })

            const res_data = await response.json()
            if(response.ok){
                storeTokenInLocalstorage(res_data.token)
                setUser({username:'', email:'', password:'', phone:''})
                toast.success('registration successful')
                navigate('/')
            }else{
                toast.error(res_data.error.extraMessage)
            }
        } catch (error) {
            console.log(error)
            toast.error("cannot register! server error")
        }
    } 

    return <>
        <div className="reg_container">
            <div>
                <img className="regImage" src="/images/regimg.jpg" alt="this is a registration image" width="500" height="500"/>
            </div>
            <div className="regForm">
            <form onSubmit={handelSubmit}>
                    <h1>Registration Form</h1>
                    <div className="input_div">
                        <label>Username: </label><br/>
                        <input type="text" name="username" placeholder="username" id="username" value={user.username} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Email: </label><br/>
                        <input type="email" name="email" placeholder="email" id="email" value={user.email} onChange={handelChange}required />
                    </div>
                    <div className="input_div">
                        <label>Password: </label><br/>
                        <input type="password" name="password" placeholder="password" id="password" value={user.password} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Phone: </label><br/>
                        <input type="number" name="phone" placeholder="phone" id="phone" value={user.phone} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div> 
    </>
}
export default Registration