import React from 'react'
import { useForm } from '@mantine/form';
import { validateString } from '../../utils/common';
import { Select, TextInput } from '@mantine/core';
import useCountries from '../../hooks/useCountries'
import Map from '../Map/Map'
// import map from '../../../node_modules'



const  AddLocation = ({propertyDetails, setPropertyDetails}) => {
  const {getAll} = useCountries()
   
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address
    },

    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value)
    }
  })

  const {country, city, address} = form.values;
  
  return (    
        <form>
        {/* left side */}
          <div className="flexCenter">

          {/* inputs */} 
          <div className="flexColStart">
          <Select
          w={"100%"}
          withAsterisk
          label="country"
          clearable
          searchable
          data={getAll()}
          {
            ...form.getInputProps("country", {type: "input"})
          }>
          </Select>

          <TextInput
          w={"100%"}
          withAsterisk
          label ="City"
          {
            ...form.getInputProps("city", {type: "input"})
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
          </div>

          {/* right side */}
          <div>
          <Map 
            address = {address}
            city = {city}
            country = {country}
          />
          </div>
        </form>
  )
}

export default AddLocation