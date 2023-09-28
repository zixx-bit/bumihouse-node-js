import axios from 'axios'
import dayjs from 'dayjs'
import { MdExposurePlus1 } from 'react-icons/md'
// import toast, {Toaster} from 'react-hot-toast'
import toast, { Toaster } from 'react-toastify';

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
})

export const getAllProperties = async() =>{
    try {
        const response = await api.get("/residency/allresd", {timeout: 10 * 1000, });
        if (response.status === 400 || response.status === 500){
            throw response.data
         }
         toast.success("Fetching properties...", {
            position: toast.POSITION.TOP_CENTER
         });

        return response.data
        
    } catch (error) {
        toast.error("Something went wrong")
        throw error        
        
    }
}