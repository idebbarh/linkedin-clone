import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import React from 'react'
import HeaderOption from './HeaderOption';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <header className='header'>
        <div className="header--left">
            <div className='header-logo--container'> 
                <LinkedInIcon fontSize="inherit"/>
            </div>
            <form className="header--form" onSubmit={(event)=>event.preventDefault()}>
                <div className="header--input-container">
                    <SearchIcon className='header--input-icon'/>
                    <input type="text" className="header--input" placeholder='Search'/>
                </div>
            </form>
        </div>
        <div className="header--right">
            <HeaderOption title='home' Icon={HomeIcon} active={true}/>
            <HeaderOption title='my network' Icon={GroupIcon}/>
            <HeaderOption title='jobs' Icon={WorkIcon}/>
            <HeaderOption title='messaging' Icon={TextsmsIcon}/>
            <HeaderOption title='notifications' Icon={NotificationsIcon}/>
            <HeaderOption title='Me' profileImageSrc='https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg'/>
        </div>
    </header>
  )
}

export default Header