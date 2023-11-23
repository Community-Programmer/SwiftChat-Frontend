import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <div className="home">
    <div className="home-text">
      <h1>Welcome to <span>SwiftChat</span>, the ultimate real-time chat app that puts simplicity at the forefront.</h1>
    <p>Create chat rooms effortlessly and dive into conversations without any barriers. SwiftChat is designed for seamless communication, making it easy to connect and chat in real time. Join the conversation today and experience the freedom of spontaneous, hassle-free chatting</p>
    <Link to='/createroom'><button className="cta-btn">Get Started</button></Link>
    </div>
    <div className="home-img">


    <dotlottie-player src="https://lottie.host/25d7eaf7-1485-4fcf-8fd6-8db98c4a63e3/HfJCug6Vi2.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
    </div>
   
   </div>
   </>
  )
}

export default Home