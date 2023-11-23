import React, { useContext } from 'react'
import '../css/Room.css'
import { useNavigate } from 'react-router-dom';
import ChatAppcontext from '../context/Context';
import socket from '../socket/socket';

const CreateRoom = () => {

  const navigate=useNavigate()
  const context = useContext(ChatAppcontext)
  const {info,setinfo}=context


  const handlechange=(e)=>{
    setinfo({...info,[e.target.name]:e.target.value})
  }

  function generateShortRoomId(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let roomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      roomId += characters.charAt(randomIndex);
    }
  
    return roomId;
  }
  
  const handleclick=(e)=>{
    e.preventDefault()
    const RoomId = generateShortRoomId();
    socket.emit('create-room', {username:info.name,roomName:info.roomName,roomId:RoomId});
    setinfo({...info,roomId:RoomId})
  
    navigate(`/room/${RoomId}`)
  }


  return (
    <>
    <div className="container">
    <h1>Create Chat Room</h1>
    <form className='chatroom-form' onSubmit={handleclick}>
    <label htmlFor="name">Name</label>
    <input type="name" name="name" id="name" value={info.name} onChange={handlechange} placeholder='Enter Name'  required/>
    <label htmlFor="roomName">Room Name</label>
    <input type="name" name="roomName" id="RoomName" value={info.roomName} onChange={handlechange} placeholder='Enter Room Name'  required/>

    <button className='create-room-btn' type='submit'>Create Room</button>
    
    </form>
    </div>
    
    </>
  )
}

export default CreateRoom