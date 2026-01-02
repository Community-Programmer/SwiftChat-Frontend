import React, { useContext } from 'react'
import '../css/Room.css'
import ChatAppcontext from '../context/Context';
import { useNavigate } from 'react-router-dom';
import socket from '../socket/socket';

const JoinRoom = () => {
  const navigate = useNavigate()
  const context = useContext(ChatAppcontext)
  const { showAlert, info, setinfo, setJoinedUsers, setChatHistory } = context

  const handlechange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value })
  }

  const handlejoin = (e) => {
    e.preventDefault()
    socket.emit('joinRoom', { username: info.name, roomId: info.roomId });


    socket.on('message', (data) => {
      showAlert(data, 'error')

    })

    socket.on('messages', (data) => {

      showAlert(`Joined Room (${data.roomName})`, 'success')
      setinfo({ ...info, roomName: data.roomName })
      setJoinedUsers(data.users || []);
      setChatHistory(data.chatHistory || []);
      navigate(`/room/${info.roomId}`)

    })



  }

  return (
    <>
      <div className="container">
        <h1>Join Room</h1>
        <form className='chatroom-form' onSubmit={handlejoin}>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" value={info.name} onChange={handlechange} placeholder='Enter Name' required />
          <label htmlFor="roomId">Room Id</label>
          <input type="name" name="roomId" id="RoomId" value={info.roomId} onChange={handlechange} placeholder='Enter six character room id' required />

          <button className='create-room-btn' type='submit'>Join Room</button>

        </form>
      </div>

    </>
  )
}

export default JoinRoom