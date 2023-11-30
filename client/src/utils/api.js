import axios from 'axios'
import dayjs from 'dayjs'
import { MdExposurePlus1 } from 'react-icons/md'
import toast from 'react-hot-toast'
// import toast, { Toaster } from 'react-toastify';

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
})

export const getAllProperties = async() =>{
    try {
        const response = await api.get("/residency/allresd",
         {timeout: 10 * 1000});

        if (response.status === 400 || response.status === 500){
            throw response.data   
         } 
         if (response.status === 200) {
            toast.success("fetched properties")
         }         
         return response.data             
                         
    } catch (error) {
        toast.error("Something went wrong!")
        throw error        
    }
}
 
export const getProperty = async(id) => {
    try {
         const response = await api.get(`/residency/${id}`, {timeout: 10*1000},);

         if (response.status === 400 || response.status === 500) {
            throw response.data
         }

        //  if (response.status === 200 && response2.status){
        //     toast.success( "property", `${data.title}`, "fetched")
        //  }
         return response.data

    } catch (error) {
        toast.error("Something went wrong!");
        throw error;
    }
}

export const createUser = async (email, tokenc ) =>{
    try {        
        await api.post(`/user/register`,
         {email},
          {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        
    } catch (error) {
        toast.error("Someting went wrong, Please try again");
        throw error;
    }
}


