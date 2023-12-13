import React, { useContext, useState } from 'react'
import { Modal, Button } from '@mantine/core'
import{DatePicker} from '@mantine/dates'
import { useMutation } from 'react-query';
import UserDetailsContext from '../../context/userDetailsContext.js'

const BookingModal = ({opened, setOpened, propertyId, email}) => {
 
  const[value, setValue] = useState(null);
  const{ userDetails : {token}} = useContext(UserDetailsContext)
  console.log(token)
  const{mutate, isLoading} = useMutation({
    mutateFn: () => bookVisit(value, propertyId, email),
  });
 
  return (
    <Modal
    opened = {opened}
    onClose={() => setOpened(false)}
    // setOpened = {setOpened}
    title="Select your date of visit"
    centered>
        <div className="flexColCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()}/>
        <Button disabled={!value} onClick={() => mutate()}>
          Book visit
        </Button>
            
        </div>

    </Modal>
  )
}

export default BookingModal