import React from 'react'
import {Toaster} from 'react-hot-toast';

const hotToast = () => {
  return (
    <Toaster
      toastOptions={{
        success:{
          style:{
            background: 'green'
          },
        },
        error:{
          style:{
            background: 'red'
          },
        },
      }}>

    </Toaster>


  )
}

export default hotToast