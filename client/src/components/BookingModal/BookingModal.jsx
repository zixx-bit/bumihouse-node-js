import React, { useState } from 'react'
import { Modal, Button } from '@mantine/core'
import{DatePicker} from '@mantine/dates'

const BookingModal = ({opened, setOpened, propertyId, email}) => {
 
  const[value, setValue] = useState(null)
 
  return (
    <Modal
    opened = {opened}
    onClose={() => setOpened(false)}
    // setOpened = {setOpened}
    title="Select your date of visit"
    centered>
        <div className="flexColCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()}/>
        <Button>
          Book visit
        </Button>
            
        </div>

    </Modal>
  )
}

export default BookingModal