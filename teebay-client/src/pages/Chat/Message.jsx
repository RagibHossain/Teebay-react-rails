import React from 'react'

const Message = ({message}) => {
    const messageStyle = {
        width:"auto",
        border:"1px solid #C3CFD9",
        borderRadius:"15px",
        padding:"5px"
    }
    return (
        <div style={messageStyle}>
            {message}
        </div>
    )
}

export default Message
