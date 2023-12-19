import React, { useContext, useState } from 'react'
import { Modal, Button } from '@mantine/core'
import{DatePicker} from '@mantine/dates'
import { useMutation } from 'react-query';
import UserDetailsContext from '../../context/UserDetailsContext.js'
import { bookVisit } from '../../utils/api.js';
import toast from 'react-hot-toast';

const BookingModal = ({opened, setOpened, propertyId, email}) => {
 
  const[value, setValue] = useState(null);
  const{ userDetails : {token}} = useContext(UserDetailsContext)
  const handleBookingSuccess = () =>{
    toast.success("you have booked successfully!") 
  }
  const{ mutate, isLoading} = useMutation({
    mutateFn: () => bookVisit(value, propertyId, email),
    onSuccess: ()  => handleBookingSuccess(),
    onError:({response}) => toast.error(response.data.message),
    onSettled: () =>setOpened(false)
  });
  // console.log(token)

 
  return (
    <Modal
    opened = {opened}
    onClose={() => setOpened(false)}
    // setOpened = {setOpened}
    title="Select your date of visit"
    centered>
        <div className="flexColCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()}/>
        <Button mt={10} disabled={!value} onClick={() => mutate()}
        variant="gradient"
              gradient={{ from: 'teal', to: 'cyan', deg: 113 }}
              loading={isLoading}
              >
          Book visit
        </Button>
            
        </div>

    </Modal>
  )
}

export default BookingModal