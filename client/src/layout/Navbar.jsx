import { FaBlog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useAuth } from "../store/auth";
import { useState } from "react";

const Navbar =()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {isLoggedIn, user} = useAuth()
    //console.log(user.isAdmin)
    

    const toggolMepu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return <>
        <nav className="container">
            <NavLink to="/">
                <div className="title">
                    <FaBlog className="navLogo"/>
                    <h2>Blogify </h2>
                </div>
            </NavLink>

            <div>         
                <div className="menu" onClick={toggolMepu}>
                        <div className="menu_icon"></div>
                        <div className="menu_icon"></div>
                        <div className="menu_icon"></div>
                    </div>
                <ul className={isMenuOpen ? "navList active" : "navList"}>

                    <li> <NavLink to="/" onClick={toggolMepu}>Home</NavLink> </li>
                    <li> <NavLink to="/about" onClick={toggolMepu}>About</NavLink> </li>
                    <li> <NavLink to="/contact" onClick={toggolMepu}>Contact</NavLink> </li>
                    <li> <NavLink to="/blog" onClick={toggolMepu}>Blog</NavLink> </li>

                    {
                    isLoggedIn ?  
                        user && user.isAdmin ? (
                            <> 
                                <li> <NavLink to="/admin" onClick={toggolMepu}>admin</NavLink> </li>
                                <li> <NavLink to="/profile" onClick={toggolMepu}>Profile</NavLink> </li>
                                <li> <NavLink to="/logout" onClick={toggolMepu}>Logout</NavLink> </li>
                            </>
                        ) : (
                            <>
                                <li> <NavLink to="/profile" onClick={toggolMepu}>Profile</NavLink> </li>
                                <li> <NavLink to="/logout" onClick={toggolMepu}>Logout</NavLink> </li>
                            </>
                        )
                    : (
                        <>
                            <li> <NavLink to="/Login" onClick={toggolMepu}>Login</NavLink></li>
                            <li> <NavLink to="/Register" onClick={toggolMepu}>Register</NavLink> </li>
                        </>
                    )
                    }
                    
                    
                </ul>   
            </div> 
        </nav> 
    </>
}

export default Navbar