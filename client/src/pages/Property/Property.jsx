import React, { useContext, useState } from 'react';
import {useMutation, useQuery} from 'react-query';
import {useLocation} from 'react-router-dom';
import { getProperty, removeBooking } from '../../utils/api';
import {PuffLoader} from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import './Property.css';
import { FaCalendarCheck } from "react-icons/fa";
import { FaShower } from "react-icons/fa"
import { MdLocationPin, MdMeetingRoom } from 'react-icons/md';
import Map from '../../components/Map/Map';
import useAuthCheck from '../../hooks/useAuthCheck';
import { useAuth0 } from '@auth0/auth0-react';
import BookingModal from '../../components/BookingModal/BookingModal';
import { Button } from '@mantine/core';
import UserDetailsContext from '../../context/UserDetailsContext';
import toast from 'react-hot-toast';
import { BsCalendarCheck } from "react-icons/bs";
import Heart from '../../components/Heart/Heart';

const Property = () => {
    const {pathname} = useLocation()
    const id = pathname.split('/').slice(-1)[0]
    // console.log(pathname);
    // console.log(id);
    const{data, isLoading, isError}= useQuery(["resd", id], () => getProperty(id));
    // console.log(data)

    const[modalOpened, setModalOpened] = useState(false)
    const{validateLogin} = useAuthCheck()
    
    const {user} = useAuth0()
    
    const { userDetails:{ token, bookings}, setUserDetails}= useContext(UserDetailsContext);
    const {mutate: cancelBooking, isLoading: cancelling} = useMutation({
        mutationFn: () => removeBooking( id, user?.email, token),
        onSuccess: () =>{
            setUserDetails((prev) => ({
                ...prev, 
                bookings: prev.bookings.filter((booking) => booking?.id !== id)
            }))
            toast.success("Booking Cancelled", {position: 'bottom-right'});
        }

    })


    if (isLoading) {
        return(<div className='wrapper'>
            <div className="flexCenter paddings">
            <PuffLoader/>
            </div>
        </div>
       )}

    if (isError) 
     {
        return(
            <div className='wrapper'>
                <div className="flexCenter padding">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )       
    }   
     
        
  return (
    <div className="wrapper">
        <div className="flexColStart paddings innerWidth property-container">
            
            {/* like button */}
            <div className="like">
            {/* <AiFillHeart size={24} color="" /> */}
            <Heart id={id}/>
            </div>

            {/* image */}
            <img src={data?.image} alt="property image"/>

            <div className="flexCenter property-details">

                {/* left */}
                <div className="felxColStart left">

                {/* head */}
                <div className="flexStart head">
                {bookings?.map((booking) => booking.id).includes(id) ? (
                  <>                  
                    <span  className="primaryText">{data?.title}</span>
                    </> ): 
                      (<span className="primaryText">{data?.title}</span>)
                }
                    <span className="orangeText" style={{fontSize:'1.5rem'}}>Ksh {data?.price}</span>
                </div>

                {/* facilities */}
                <div className="flexStart facilities">

                    {/* bathrooms */}
                    <div className="flexStart facility">
                        <FaShower size={20} color="#1F3E72"/>
                        <span>{data?.facilities?.bathrooms}Bathrooms</span>
                    </div>
                    {/* parkings */}
                    <div className="flexStart facility">
                        <AiTwotoneCar size={20} color="#1F3E72"/>
                        <span>{data?.facilities?.parkings}Parking</span>
                    </div>
                    {/* rooms */}
                    <div className="flexStart facility">
                        <MdMeetingRoom size={20} color="#1F3E72"/>
                        <span>{data?.facilities?.bedrooms} Room/s</span>
                    </div>
                </div>

                {/* description */}
                <span className="secondaryText" style={{textAlign:"justify"}}>
                {data?.description}</span>
                {/* adress */}
            <div className="flexStart" style={{gap: "1rem"}}>
                <MdLocationPin size={25}/>
                <span className="secondaryText">
                    {
                        data?.address 
                    }{" "}
                    
                    {
                        data?.city
                    }{" "}
                
                    {
                        data?.country
                    }{" "}

                </span>

            </div>

            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
                <>
                <div>
                <span mt={10}>                 
                   <p style={{  color: 'green', fontWeight: ''
                   ,marginBottom: '2rem', marginTop: '2rem' }} >
                    <span><BsCalendarCheck size={20} color="green" style={{marginRight:"1rem"}}/></span> Your visit is already booked for date {bookings?.filter((booking) => booking?.id === id)[0].date}
                  
                   </p> 
                </span>
                </div>
                <Button variant='outline' w={"100%"} color='red' onClick={()=> cancelBooking()} loading={cancelling}>
                <span> Cancel booking</span>
                </Button>              
                </>
               
            ):(
                <Button className="button"
                onClick={() => {
                    validateLogin() && setModalOpened(true);
                }}
                >
                    Book your visit
                </Button>
               
            )}
           

            {/* Booking modal */}

            <BookingModal
                opened = {modalOpened}
                setOpened ={setModalOpened}
                propertyId = {id}
                email={user?.email}
            />
            
            </div>

                {/* right side */}
                <div className="map">
                <Map
                address={data?.address} 
                city={data?.city} 
                country= {data?.country}/>
                </div>
                
            </div>

        </div>

    </div>
  );
};

export default Property