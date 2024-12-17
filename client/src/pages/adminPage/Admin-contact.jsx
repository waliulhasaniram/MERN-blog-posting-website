import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"

const AdminContact =()=>{
    const [contactsData, setContactData] =useState([])
    const {authenticationToken} = useAuth()

    const getAllContacts =async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/admin/contacts', {
                method: "GET",
                headers: {Authorization : authenticationToken}
            })
             if(response.ok){
                const res_data = await response.json()
                //console.log(res_data)
                setContactData(res_data.allContactData)
             }               
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAllContacts()
    },[])

    const deleteOneContact =async(id)=>{
        try {
            const response = await fetch(`http://localhost:3000/api/admin/contacts/${id}`, {
                method: "DELETE",
                headers: {Authorization : authenticationToken}
            })
            if(response.ok){
                getAllContacts()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <h1 className="adminH1">admin contact dashboard</h1>
        <div className='adminUser'>
     
        <table border={3} className='adminUserTable'>
        <thead>
            <th>Username</th>
            <th>Email</th>
            <th>message</th>
            <th>Delete</th>
        </thead>
        <tbody>
                {Array.isArray(contactsData) && contactsData.map((curElem, index) => {
                    return(
                        <tr key={index}>
                            <td>{curElem.username}</td>
                            <td>{curElem.email}</td>
                            <td>{curElem.message}</td>
                            <td><button onClick={()=> {deleteOneContact(curElem._id)}}>Delete</button></td>
                        </tr>
                    )
                })}
        </tbody>
      </table>
    
    </div>
    </>
}

export default AdminContact