import React from 'react'
import { useForm } from '@mantine/form';
import { validateString } from '../../utils/common';
import { Button, Group, Select, TextInput } from '@mantine/core';
import useCountries from '../../hooks/useCountries'
import Map from '../Map/Map'
// import map from '../../../node_modules'



const  BasicDetails = ({prevStep, nextStep, propertyDetails, setPropertyDetails}) => {
   
  const form = useForm({
    initialValues: {
      title: propertyDetails?.title,
      description: propertyDetails?.description,
      price: propertyDetails?.price
    },

    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) => value < 1000? "Must be greater than 999 dollars": null,
    },
  })

  const {title, description, price} = form.values;

  const handleSubmit = () =>{
    const{hasErrors} = form.validate()
    if (!hasErrors) {
      setPropertyDetails((prev) => ({...prev, city, address, country}))
      nextStep()
    }
  }
  
  return (    
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit()
        }}>
       
          <div className="flexCenter">
          
          {/* inputs */} 
          <div className="flexColStart">
          <Select
          w={"100%"}
          withAsterisk
          label="Title"
          placeholder='Property Name'
          {
            ...form.getInputProps("title")
          }>          
          </Select>

          <TextInput
          w={"100%"}
          withAsterisk
          label ="Description"
          {
            ...form.getInputProps("description")
          }>
          </TextInput>

          <TextInput
          w={"100%"}
          withAsterisk
          label="Address"
          {
            ...form.getInputProps("address", {type: "input"})
          }>
          </TextInput>

            </div>
          

          {/* right side */}
          <div style={{flex:1}}>
          <Map 
            address = {address}
            city = {city}
            country = {country}
          />
          </div>
          </div>

          <Group position="center" mt={"xl"}>
            <Button type="submit">Next Step</Button>
          </Group>

        </form>
  )
}

export default BasicDetails