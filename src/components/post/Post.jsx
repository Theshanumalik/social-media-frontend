import React from 'react'
import './post.scss'
import profilePic from '../../assets/user.jpg'
import {  MessageOutlined, ThumbUpOutlined } from '@mui/icons-material'
const Post = () => {
  return (
    <div className='post'>
        <div className="postHeader">
            <img src={profilePic} alt="helo" className="postProfilePicture" />
            <span>Shanu Malik</span>
        </div>
        <div className="post-content">
            <img src={profilePic} alt="helo" />
        </div>
        <div className="post-action">
            <button><ThumbUpOutlined className='icon'/>Like</button>
            <button><MessageOutlined className='icon'/>Comment</button>
        </div>
    </div>
  )
}

export default Post