import { Modal } from '@mantine/core'
import React from 'react'

const BookingModal = ({opened, setOpened, propertyId, email}) => {
  return (
    <Modal
    opened = {opened}
    setOpened = {setOpened}
    title="Select your date of visit"
    centered>
        <div>
            <span>this is a booking modal</span>
        </div>

    </Modal>
  )
}

export default BookingModal