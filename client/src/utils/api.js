import axios from 'axios'
import dayjs from 'dayjs'
import { MdExposurePlus1 } from 'react-icons/md'
import toast from 'react-hot-toast'
// import { Toaster } from 'react-toastify';

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

export const createUser = async (email, token) => {

    try {        
       await api.post(`/user/register`, {email},
       {
        headers:{
            Authorization: `Bearer ${token}`
        }
       }
    );  
    //    toast.success("Registeration/Login successful")                                                                                 
     
    } catch (error) {
        toast.error("Failed to create your account, Please try again");
        // console.log(error)
         throw error
        
    }
}

export const bookVisit = async( date, propertyId, email, token) =>{
    try {
        await api.post(`/user/bookVisit/${propertyId}`,
            {
                email: email,
                id: propertyId,       
                date: dayjs(date).format("DD/MM/YYYY")
            },
            {
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            }
        )
        
    } catch (error) {
        toast.error("Booking not successful, Please try again!")
        throw error
    }

}

export const removeBooking = async(id, email, token ) => {
    try {
        await api.post(`/user/removeBooking/${id}`, {
             email: email,
         },
         {
            headers: {
                Authorization:`Bearer ${token}`,
            },
         }
         );
        
    } catch (error) {
        toast.error("Unable to cancel booking")
        throw error        
    }
}

export const toFav = async(id, email, token) =>{
    try {
        await api.post(`/user/favouriteResidency/${id}`, {
            email: email,
             },
             {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
             }
             
         );
        
    } catch (error) {
        toast.error("Unable to add to favourites") 
        throw error;
    }
   
}

export const getAllFav = async(email, token) =>{
    if(!token) return
    try {
        
      const res =  await api.post (`/user/allFavResidencies`,{
            email: email,
        },
        { 
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
       );
    //    toast.success("all favs fetched")
       console.log(res)
       return res

    } catch (error) {
        toast.error("unable to get favourites");
        throw error
    }

}

export const getAllBookings = async(email, token ) => {
    if (!token ) return
    try {        
        const res  = await api.post(
        `/user/allBookings`,
            {
            email: email,
            },
          {
            headers: {
                Authorization: `Bearer ${token}`,
            },
         }
        );
        console.log(res)
        return res.data["bookedVisits"];
        
    } catch (error) {
        toast.error ("Unable to get your bookings")
        throw error
        
    }
}

export const createResidency = async (data, token) => {
    try {
        const res = await api.post(
            `/residency/create`,
            {
                data
            },
            {
                headers: {
                    Authorization : `Bearer ${token}`
                },
            }
        )
        
    } catch (error) {
        throw error
    }
}



