import React, {  useEffect, useRef, useState } from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import './UploadImage.css'
import { Button, Group } from '@mantine/core';

const UploadImage = ({prevStep, nextStep, propertyDetails, setPropertyDetails}) => {
 
    const handleNext = () =>{
        setPropertyDetails(()=> ({...prevStep, image:imageURL}));
        nextStep();

    }

    const [imageURL, setImageURL] = useState(propertyDetails.image);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dlvdrkj3q",
            uploadPreset: "ih3icp4n",
            maxFiles: 3
        },(err, result) => {
            if (result.event === "success") 
            {
            setImageURL(result.info.secure_url)    
            }
        })

    },[])
    return (
        <div className="flexColCenter uploadWrapper">
        {
            !imageURL ? (
                <div className="flexColCenter uploadZone"
                onClick={()=> widgetRef.current?.open()}>
                <AiOutlineCloudUpload size={50} color="grey"/>
                <span>Upload Image</span>
                </div> 
            ):(
                <div className="uploadedImage"
                onClick={()=> widgetRef.current?.open()}>
                    <img src={imageURL}/>
                </div>
            )
        }
          
        <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}> Back </Button>
        <Button onClick={handleNext} disabled={!imageURL}>Next</Button>

      </Group>

        </div>
      

    
  )
}

export default UploadImage