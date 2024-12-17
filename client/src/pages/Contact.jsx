import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom"

const Contact =()=>{
   const navigate = useNavigate()
    const [contactData, setContactData] = useState({username:'', email:'', message:''})

    //const [isUserAvailable, setUserAvailable] = useState(true)
    const {user, isLoggedIn} = useAuth()

    useEffect(()=>{
        if(user){
            setContactData({username: user.username, email: user.email, message:''})
            //setUserAvailable(false)
        }

       
    },[user])
    

    const handelChange =(e)=>{
        const name = e.target.name 
        const value = e.target.value 
        setContactData({
            ...contactData,
            [name]:value
        })
    }
    
    const handelSubmit =async(e)=>{
        e.preventDefault()
        if(isLoggedIn){
            try {
                const response = await fetch('http://localhost:3000/api/data/contact', {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(contactData)
                })
                const res_data = await response.json()
                if(response.ok){
                    toast.success("successfully sent message")
                    setContactData({username:'', email:'', message:''})
                }else{
                    toast.error(res_data.error.extraMessage)
                }   
            } catch (error) {
                console.log(error)
            }
        }else{
            toast.error("login first to contact")
            navigate('/login')
        }
    }

    return <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.383596378653!2d90.34606226256942!3d23.806295990171773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c5074ec8db%3A0x1450dad46461cbe8!2sMirpur-2%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1729368781744!5m2!1sen!2sbd" width="99.5%" height="450" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="reg_container">

            <div>
                <img className="contactImage" src="/images/contactimg.png" alt="this is a registration image" width="500" height="500"/>
            </div>
            <div className="regForm">
                <form onSubmit={handelSubmit}>
                    <h1>Contact us </h1>
                    <div className="input_div">
                        <label>username: </label><br/>
                        <input type="text" name="username" placeholder="username" id="username" value={contactData.username} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Email: </label><br/>
                        <input type="email" name="email" placeholder="email" id="email" value={contactData.email} onChange={handelChange} required />
                    </div>
                    <div className="input_div">
                        <label>Message: </label><br/>
                        <textarea type="text" name="message" placeholder="message" id="message" value={contactData.message} onChange={handelChange} required></textarea>
                    </div>
                    <div className="input_div">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </div> 

    </>
}

export default Contact