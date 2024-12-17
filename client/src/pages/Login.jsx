import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import {toast} from 'react-toastify'

const Login =()=>{
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({email:'', password:''})
    const {storeTokenInLocalstorage} = useAuth()

    const handelChange =(e)=> {
        const name = e.target.name 
        const value = e.target.value 

        setUserLogin({
            ...userLogin,
            [name]:value
        })
    }
    const handelSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(userLogin)
            })
            const res_data = await response.json()
            if(response.ok){
                storeTokenInLocalstorage(res_data.token)
                setUserLogin({email:'', password:''})
                
                toast.success('login successful')
                navigate('/')
            }else{
                toast.error("login error")
            } 
        } catch (error) {
            console.log(error)
            toast.error("server error")
        }

    }

    return <>
       <div className="reg_container">
        <div>
            <img className="regImage" src="/images/regimg.jpg" alt="this is a registration image" width="500" height="500"/>
        </div>
        <div className="regForm">
            <form onSubmit={handelSubmit}>
                <h1>Login Form</h1>

                <div className="input_div">
                    <label>Email: </label><br/>
                    <input type="email" name="email" placeholder="email" id="email" value={userLogin.email} onChange={handelChange} required />
                </div>
                <div className="input_div">
                    <label>Password: </label><br/>
                    <input type="password" name="password" placeholder="password" id="password" value={userLogin.password} onChange={handelChange} required />
                </div>
                <div className="input_div">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>

        </div>    
    </>
}

export default Login