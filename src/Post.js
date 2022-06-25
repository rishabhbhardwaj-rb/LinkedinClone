import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css'
const Post = forwardRef(({name, description, message, photoUrl}, ref) =>{

  return (
    <div ref = {ref} className="post">
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
          <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray"/>    
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>    
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>        
        </div> 
    </div>
  )
})

export default Post