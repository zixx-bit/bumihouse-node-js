import React from 'react'
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'

const PropertyCard = ({card}) => {
  return (
    <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <AiFillHeart size={24}/>
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
  )
}

export default PropertyCard