import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const GeoCoderMarker = () => {
  return (
    <Marker position={position} icon={DefaultIcon}>
           <Popup/>

    </Marker>
    
    )
}

export default GeoCoderMarker