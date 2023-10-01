import React from 'react';
import {useQuery} from 'react-query';
import {useLocation} from 'react-router-dom';


const Property = () => {
    const {pathname}=useLocation()
    const id =pathname.split('/').slice(-1)[0]
    console.log(id);
    const{data, isLoading, isError}=useQuery(["resd"])
  return (
    <div>Property</div>
  )
}

export default Property