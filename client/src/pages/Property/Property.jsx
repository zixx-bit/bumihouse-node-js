import React from 'react';
import {useQuery} from 'react-query';
import {useLocation} from 'react-router-dom';
import { getProperty } from '../../utils/api';
import {PuffLoader} from "react-spinners";
import {AiFillHeart} from "react-icons/ai";


const Property = () => {
    const {pathname}=useLocation()
    const id =pathname.split('/').slice(-1)[0]
    // console.log(id);
    const{data, isLoading, isError}= useQuery(["resd", id], ()=> getProperty(id));
    // console.log(data)
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
                <AiFillHeart size={24} color="white"/>
            </div>

            {/* image */}
            <img src={data?.image} alt="property image"/>
        </div>

    </div>
  );
};

export default Property