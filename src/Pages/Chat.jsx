import React, { useContext, useEffect, useState } from 'react'
import '../css/Chat.css'
import socket from '../socket/socket';
import { useNavigate, useParams } from 'react-router-dom';
import ChatAppcontext from '../context/Context';
import MessageBox from '../components/MessageBox';


const Chat = () => {
  const navigate = useNavigate()
    const context=useContext(ChatAppcontext)
    const {info,joinedUsers, setJoinedUsers}=context
    const { id } = useParams();
    const [messages, setMessages] = useState([{username:'',message:'',time:'',type:''}]);

    useEffect(() => {
        // Listen for 'recieve' event
        const receiveMessage = (data) => {
            console.log('Received recieve event:', data);
            
            setMessages((messages) => [...messages,{ username: data.username, message: data.message,time: data.timestamp,type:'receive'}]);
           

        };

     

        // Listen for 'recieve' event
        const userjoined = (data) => {
            console.log('userjoined:', data);
            setJoinedUsers((prevUsers) => [...prevUsers, data.username]);
            setJoinedUsers(data.users || []);
            const element=document.createElement('div')
            element.innerText=`${data.username} joined the chat`
            element.classList='user-joined-message'
            document.getElementById('message-container').appendChild(element)
           
        };


        const userDisconnected = (data) => {
            setJoinedUsers(data.users || []);
           
          };

        const userExited = (data) => {
            setJoinedUsers(data.users || []);
            const element=document.createElement('div')
            element.innerText=`${data.username} left the chat`
            element.classList='user-left-message'
            document.getElementById('message-container').appendChild(element)
          };

        socket.on('recieve', receiveMessage);
        socket.on('user-joined', userjoined);
        socket.on('user-disconnected', userDisconnected);
        socket.on('user-exited', userExited);

        // Clean up the event listener when the component unmounts
        return () => {
            socket.off('recieve', receiveMessage);
            socket.off('user-joined', userjoined);
            socket.off('user-disconnected', userDisconnected);
            socket.off('user-exited', userExited);
        };

       

      // eslint-disable-next-line
    }, []); 
    const handleRemoveUser = () => {
        socket.emit('exitRoom', {roomId:info.roomId,username:info.name});
        navigate('/')
        
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const current_time=new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
        const message = document.getElementById('message-box').value;
        socket.emit('send_message', { message, roomId: id,timestamp: current_time,username:info.name});
        setMessages((messages) => [...messages,{ username: info.name, message: message,time:current_time,type:'sent' }]);
        document.getElementById('message-box').value=''
    
    };
    
  const [isOpen, setIsOpen] = useState(false);
  const toggleye = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <div className="chat-container">

      <div className={`left-section ${isOpen ? 'active-pane' : ''}`}>
      <h2>Room Id: {info.roomId}</h2>
        <h3>user Connected in room - {joinedUsers.length}</h3>
        <ul>
          {joinedUsers.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
        <div className="leave-btn">
        <i onClick={handleRemoveUser} class="fa-solid fa-right-from-bracket fa-2xl"/>
        <i onClick={toggleye} id='slash-eye' class="fa-solid fa-eye-slash fa-xl eye"/>
        </div>
      </div>

      <div className="right-section">
        
        <div className="room-info">
        <h1>{info.roomName}</h1>
        <i onClick={toggleye} class="fa-solid fa-eye fa-xl eye"/>
        </div>

        <div id='message-container' className="message-box">
        {messages.map((data, index) => (
        data.username && data.message ? (
        <MessageBox key={index} username={data.username} message={data.message} timestamp={data.time} type={data.type}/>
        ) : null
        ))}
        </div>

        <div className="message-bar">
        <textarea name="message" id="message-box"></textarea>
        <i onClick={handleSubmit} class="fa-solid fa-paper-plane fa-xl send"/>
      
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Chat