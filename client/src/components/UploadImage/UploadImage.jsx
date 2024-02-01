import React, {  useEffect, useRef, useState } from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import './UploadImage.css'

const UploadImage = ({prevStep, nextStep, propertyDetails, setPropertyDetails}) => {
 
    const [imageURL, setImageURL] = useState(propertyDetails.image);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dlvdrkj3q",
            uploadPreset: "ih3icp4n",
            maxFile: 1
        },(err, result) => {
            if (result.event === "success") 
            {
            setImageURL(result.info.secure_url)    
            }
        })

    },)
    return (
        <div className="flexColCenter uploadWrapper">
        {
            !imageURL ? (
                <div className="flexColCenter uploadZone">
                <AiOutlineCloudUpload size={50} color="grey"/>
                <span>Upload Image</span>
                </div> 
            ):(
                <div className="uploadedImage">
                    <img src={imageURL}/>
                </div>
            )
        }

        </div>
    
  )
}

export default UploadImage