import { Avatar } from '@mui/material'
import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './LeftBar.css'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/user/userSlice'
function LeftBar() {
    const user = useSelector(selectUser);
  return (
        <div className="left-bar">
            <div className="left-bar--profile-info">
                <div className="left-bar--top">
                    <div className="left-bar--profile-background-image">
                        <img src="https://media-exp1.licdn.com/dms/image/C5616AQHfbns9Is_l7Q/profile-displaybackgroundimage-shrink_350_1400/0/1663068989945?e=1674691200&v=beta&t=-UA1ZzHRFpr4bZ3Jn59Ud6TN3m0p-lMHBr_vfLIbon4" alt="profile background color" />
                    </div>
                    <Avatar src={user?.photoURL} sx={{ width: 64, height: 64 }} className='left-bar--profile-image'>{user?.email[0]}</Avatar>
                    <h3 className="left-bar--full-name">{user?.name}</h3>
                    <p className='left-bar--description'>{user?.email}</p>
                </div>
                <div className="left-bar--bottom">
                    <p className='left-bar--stats'>Who's viewed your profile <span>36</span></p>
                    <p className='left-bar--stats'>Impressions of your post <span>1</span></p>
                </div>
            </div>
            <div className="left-bar--recents">
                <h3 className="left-bar--recents-title">Recent</h3>
                <div className="left-bar--recent">
                    <Diversity3Icon fontSize="inherit"/><h3>react native</h3>
                </div>
                <div className="left-bar--recent">
                    <Diversity3Icon fontSize="inherit"/><h3>python</h3>
                </div>
                <div className="left-bar--recent">
                    <Diversity3Icon fontSize="inherit"/><h3>front end</h3>
                </div>
                <div className="left-bar--recent">
                    <Diversity3Icon fontSize="inherit"/><h3>javascript</h3>
                </div>
            </div>
        </div>
  )
}

export default LeftBar