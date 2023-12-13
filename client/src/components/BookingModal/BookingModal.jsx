import React, { useContext, useState } from 'react'
import { Modal, Button } from '@mantine/core'
import{DatePicker} from '@mantine/dates'
import { useMutation } from 'react-query';
import UserDetailsContext from '../../context/userDetailsContext.js'
import { bookVisit } from '../../utils/api.js';
import toast from 'react-hot-toast';

const BookingModal = ({opened, setOpened, propertyId, email}) => {
 
  const[value, setValue] = useState(null);
  const{ userDetails : {token}} = useContext(UserDetailsContext)
  const handleBookingSuccess = () =>{
    toast.success("you have booked successfully!") 
  }
  const{mutate, isLoading} = useMutation({
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
        <Button disabled={!value} onClick={() => mutate()}
        variant="gradient"
              gradient={{ from: 'cyan', to: 'lime', deg: 90 }}
              loading={isLoading}
              >
          Book visit
        </Button>
            
        </div>

    </Modal>
  )
}

export default BookingModal