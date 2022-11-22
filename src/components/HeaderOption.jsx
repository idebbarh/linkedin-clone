import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'
import {auth} from '../firebase/firebase'
import {signOut} from 'firebase/auth'

function HeaderOption({Icon,title,profileImageSrc,active,description}) {
  const logoutHandler = ()=>{
    signOut(auth);
  }

  return (
    <div className={`header-option ${active && 'active'}`} onClick={!Icon ? logoutHandler : undefined}>
        {Icon ? <Icon className='header-option--icon'/> : <Avatar src={profileImageSrc} sx={{ width: 24, height: 24 }}>{description[0]}</Avatar>}
        <h3 className='header-option--title'>{title}</h3>
    </div>
  )
}

export default HeaderOption