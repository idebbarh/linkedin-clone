import React from 'react'
import './FeedsOption.css'
function FeedsOption({title,Icon,curColor}) {
  return (
    <div className='feeds-option' style={{color:curColor}}>
        <Icon className='feeds-option--icon' fontSize="inherit"/>
        <h3 className="feeds-option--title">{title}</h3>
    </div>
  )
}

export default FeedsOption