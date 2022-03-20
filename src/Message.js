//es7 snippet
//rfce

import React, {forwardRef} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {   //higher order components
    const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser ? "message__userCard" : "message__guestCard"} >
            <CardContent> 
                <Typography
                color="textSecondary"
                variant="h5"
                component="h2"
                
                > {!isUser && `${message.username || 'Unknown User' }: ` }  {message.message}
                </Typography>
            </CardContent>
        </Card>
      {/* <h1>{props.username} : {props.text}</h1> */}
    </div>
  )
})

export default Message;
