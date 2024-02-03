import { Box, Button, Group, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import React from 'react'

const Facilities = ({prevStep, propertyDetails, setPropertyDetails, setOpened, setActiveStep}) => {

  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      parkings: propertyDetails.facilities.parkings,
      bathrooms: propertyDetails.facilities,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? "must have atleast one room" : null),
      bathrooms: (value) => (value < 1 ? "Must have atleast one bathroom": null,
    },
  })

  const {bedrooms, parkings, bathrooms} = form.values

  const handleSubmit =() =>{
    const {hasError}

  }
  return (
    <Box maw="30%" mx="auto" my="sm">
    <form 
    onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit();
    }}>

        <NumberInput
        withAsterisk
        label="No of Bedrooms"
        min={0}
        {...form.getInputProps("bedrooms")}>
        </NumberInput>
        
        <NumberInput
        label="No of Parkings"
        min={0}
        {...form.getInputProps("parkings")}>
        </NumberInput>

        <NumberInput
        withAsterisk
        label="No of Bathrooms"
        min={0}
        {...form.getInputProps("bathrooms")}>
        </NumberInput>

    <Group position="center" mt="xl">
    <Button variant="default" onClick={prevStep}>
    Back
    </Button>

    <Button type="submit" color="green" disabled={isLoading}>
    {isLoading ? "Sumitting" : "Add Property"}

    </Button>
    </Group>
    </form>
    </Box>
  )
}

export default Facilities