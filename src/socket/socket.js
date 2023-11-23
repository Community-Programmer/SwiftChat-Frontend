import { io } from 'socket.io-client';

const socket = io('https://swiftchat-backend.onrender.com');

export default socket;