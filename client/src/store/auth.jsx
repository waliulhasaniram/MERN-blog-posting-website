import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider =({children})=>{

    const [user, setUser] = useState([])
    const [tokenRemove, setTokenRemove] = useState(localStorage.getItem('token'))
    const authenticationToken = `Bearer ${tokenRemove}`

    const isLoggedIn = !!tokenRemove // // isLoggedIn = true or false for the value of "tokenRemove" used in navbar
    const [isLoading, setIsLoading] = useState(true)

    const storeTokenInLocalstorage =(servetoken)=>{
        setTokenRemove(servetoken)
        return localStorage.setItem('token', servetoken)
    }
    
    const LogoutUser =()=>{
        setTokenRemove('')
        return localStorage.removeItem('token')
    }


    //jwt Authentication
    const userAuthentication =async()=>{
        setIsLoading(true)
        try {
            const response = await fetch('http://localhost:3000/api/auth/user', {
                method: "GET",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                const res_data = await response.json()
                //console.log(res_data)
                setUser(res_data.userData)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

   

    useEffect(()=>{
        userAuthentication()
    },[])

    return <AuthContext.Provider value={{authenticationToken, storeTokenInLocalstorage, LogoutUser, user, isLoggedIn, isLoading}}>{children}</AuthContext.Provider>
}

export const useAuth =()=>{
    const contextValue = useContext(AuthContext)
    return contextValue
}
