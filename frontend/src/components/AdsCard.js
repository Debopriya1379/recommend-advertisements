import React from 'react'
import './AdsCard.css'


export default function AdsCard({data}) {
  return (
    <div className='AdsCard'>
        <div className="Card_image">
          <img src={data.imageUrl} alt="ad." />
        </div>
        <div className="Card_details">
          <h4>{data.headline}</h4>
          <p>{data.description}</p>
        </div>
    </div>
  )
}
