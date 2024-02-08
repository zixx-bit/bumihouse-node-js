import { Box, Button, Group, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'react-query';
import UserDetailContext from "../../context/UserDetailsContext";
import useProperties from "../../hooks/useProperties.jsx";
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { createResidency } from '../../utils/api';


const Facilities = ({prevStep, propertyDetails, setPropertyDetails,
  setOpened, setActiveStep}) => {

  const form = useForm({
    initialValues: {     
      bathrooms: propertyDetails?.facilities?.bathrooms,
      parking: propertyDetails?.facilities?.parking,
      bedrooms: propertyDetails?.facilities?.bedrooms,     
    },
    validate: {
      bedrooms: (value) => value < 1 ? "must have atleast one room" : null,
      bathrooms: (value) => value < 1 ? "Must have atleast one bathroom": null,
    },
  })
  // const {title, description, price} = form.values;

  const {bathrooms, bedrooms, parking} = form.values;
  // console.log(bathrooms,bedrooms,parking);

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) =>
         ({...prev, facilities:{ bedrooms, parking, bathrooms}
      })
      
      );
      mutate()      
    }
  }

//  upload logic
const {user} = useAuth0()
const {userDetails: {token} }= useContext(UserDetailContext);
const {refetch: refetchProperties} = useProperties();

const {mutate , isLoading} = useMutation ({
      mutationFn: () => createResidency({
        ...propertyDetails,
          facilities:{ bedrooms, parking, bathrooms}
        ,
      },token),
      onError: ({response}) => toast.error (response.data.message, {position: "bottom-right"}),
      onSettled: () => {
        toast.success ("Added successfully", {position: "bottom-right"});
        setPropertyDetails({
          title: "",
          description: "",
          price: 0,
          country: "",
          city: "",
          address: "",       
          image: null,

          facilities: {
            bathrooms: 0,
            parking: 0,
            bedrooms: 0,
          },

        userEmail: user?.email,
        })
     
        setOpened(false);
        setActiveStep(0);
        refetchProperties();
      }
    })
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
        {...form.getInputProps("parking")}>
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

    <Button type="submit" color="green" 
    disabled={isLoading}
    >
    {isLoading ? "Saving.." : "Submit"}
    </Button>
    </Group>
    </form>
    </Box>
  )
}
export default Facilities