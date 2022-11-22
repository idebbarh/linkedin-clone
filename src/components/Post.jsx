import FeedsOption from './FeedsOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import './Post.css'
import { Avatar } from '@mui/material';
import React,{ forwardRef } from 'react';

const Post = forwardRef(({name,description,content,image},ref) =>{
  return (
    <div className='post' ref={ref}>
        <div className="post--head">
            <Avatar src={image} sx={{ width: 45, height: 45 }}>{description[0]}</Avatar>
            <div className="post--owner-info">
                <h3 className="post--owner-name">{name}</h3>
                <p className='post--owner-description'>{description}</p>
            </div>
            <button className="post--follow-btn"><AddIcon fontSize="inherit"/>follow</button>
        </div>
        <div className="post--content">
            <p>{content}</p>
        </div>
        <div className="post--actions">
            <FeedsOption title='like' Icon={ThumbUpIcon}/>
            <FeedsOption title='comment' Icon={InsertCommentIcon}/>
            <FeedsOption title='repost' Icon={RepeatIcon}/>
            <FeedsOption title='send' Icon={SendIcon}/>
        </div>
    </div>
  )
})

export default Post