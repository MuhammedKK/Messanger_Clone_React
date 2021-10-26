import React, {forwardRef} from 'react';
import "./Messages.css"
import {Card, CardContent, Typography} from '@material-ui/core';
const Message = forwardRef(({message, username}, ref) => {

    const isThisSameUser = username === message.username;
    
    return (
        <div ref={ref} className={`message ${isThisSameUser && 'message__user'}`}>
            <Card className={isThisSameUser ? 'message__userCard' : "message__guest"}> 
                <CardContent>
                    <Typography variant="h5" color="inherit">
                        {message.username + ' : ' + message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message

