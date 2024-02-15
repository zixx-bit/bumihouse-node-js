import React, { useState } from 'react'
import './Properties.css'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import SearchBar from '../../components/SearchBar/SearchBar'


const Properties = () => {
  const[filter, setFilter] = useState(" ")
  const {data, isError, isLoading} = useProperties()
  if (isError) {
    return(
      <div className='wrapper'>
      <span>Error while fetching data</span>
      </div>
    )    
  }

  if (isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
          height = "80"
          width = "80"
          radius = {1}
          color="#4066ff"
          aria-label="puff-loading"
        /><span style={{color:"#4066ff"}}> fetching properties...</span> 
      </div>
    )
  }

  return (
    <div className='wrapper'>
    <div className='flexColCenter paddings innerWidth properties-container'>
      <SearchBar
        filter = {filter}
        setFilter = {setFilter}
      />
      <div className='paddings flexCenter properties'>
        {
         // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
          data.filter((property) => property.title.toLowerCase().includes(filter.toLowerCase())||
          property.city.toLowerCase().includes(filter.toLowerCase())||
          //property.price.includes(filter)||
          property.country.toLowerCase().includes(filter.toLowerCase()))
          .map((card, i) => (
            <PropertyCard card={card} key={i}/>
          ))
          }
      </div>
    </div>
    </div>
  )
}

export default Properties