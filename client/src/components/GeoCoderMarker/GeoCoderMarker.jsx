import React, { useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

const GeoCoderMarker = ({address}) => {

    const map =useMap()
    const [position, setPosition] = useState([60, 19])
  return (
    <Marker position={position} icon={DefaultIcon}>
           <Popup/>

    </Marker>    
    )
}

export default GeoCoderMarker