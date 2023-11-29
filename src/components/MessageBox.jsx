import React, { useEffect } from 'react'
import '../css/MessageBox.css'

const MessageBox = ({username,message,timestamp,type}) => {

  useEffect(()=>{
    const messages = document.querySelectorAll('.message')
    messages[messages.length - 1].scrollIntoView();
  })
  return (
    <>
    <div className={`message ${type}`}>
      <b>{`${username}`}</b>
      {`: ${message}`}
      <span className="timestamp">{timestamp}</span>
    </div>
    </>
  )
}

export default MessageBox