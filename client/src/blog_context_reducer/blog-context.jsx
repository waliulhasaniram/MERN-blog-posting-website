import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const BlogContext = createContext()

export const BlogProvider =({children})=>{
    const {authenticationToken} = useAuth()



    return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>
}

export const useBlog=()=>{
    const blogContextValue = useContext(BlogContext)
    return blogContextValue
}