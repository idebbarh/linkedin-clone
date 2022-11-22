import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'

function HeaderOption({Icon,title,profileImageSrc,active}) {
  return (
    <div className={`header-option ${active && 'active'}`}>
        {Icon ? <Icon className='header-option--icon'/> : <Avatar src={profileImageSrc} sx={{ width: 24, height: 24 }}>I</Avatar>}
        <h3 className='header-option--title'>{title}</h3>
    </div>
  )
}

export default HeaderOption