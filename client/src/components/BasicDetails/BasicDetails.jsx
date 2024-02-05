import React from 'react'
import { useForm } from '@mantine/form';
import { validateString } from '../../utils/common';
import { Box, Button, Group, NumberInput, Select, TextInput, Textarea } from '@mantine/core';
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
  });

  const {title, description, price} = form.values;

  const handleSubmit = () =>{
    const{hasErrors} = form.validate()
    if (!hasErrors) {
      setPropertyDetails((prev) => ({...prev, title, description, price}))
      nextStep()
    }
  }
  
  return ( 
    <Box maw="50%" mx="auto" my="md">   
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit()
        }}>
                
    <TextInput
        withAsterisk
        label="Title"
        placeholder="Property Name"
        {
        ...form.getInputProps("title")
        }>          
    </TextInput>

    <Textarea
        placeholder="Description"
        withAsterisk
        label ="Description"
        {
            ...form.getInputProps("description")
        }>
    </Textarea>

    <NumberInput
      withAsterisk
      label="Price"
      placeholder="1000"
      min={999}
      {
          ...form.getInputProps("price")
      }>
    </NumberInput>
    
          <Group position='center' mt='xl'>
            <Button variant='default' onClick={prevStep}>
            Back
            </Button>

            <Button type='submit'>
            Next step
            </Button>
        </Group>        
        </form>
      </Box>
  )
}

export default BasicDetails;