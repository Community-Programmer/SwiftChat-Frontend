import React from 'react'
import '../css/MessageBox.css'

const MessageBox = ({username,message,timestamp,type}) => {
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