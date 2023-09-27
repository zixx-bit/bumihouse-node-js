import axios from 'axios'
import dayjs from 'dayjs'
import { MdExposurePlus1 } from 'react-icons/md'
import {toast} from 'react-toastify'

export const api = axios.create({
    baseURL: "http://localhost:8000"
})

export const getAllProperties = async() =>{
    try {
        
    } catch (error) {
        toast.error("Something went wrong")
        throw error        
        
    }
}