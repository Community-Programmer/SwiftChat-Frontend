import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import CreateRoom from './Pages/CreateRoom';
import JoinRoom from './Pages/JoinRoom';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/createroom' element={<CreateRoom/>}/>
      <Route path='/joinroom' element={<JoinRoom/>}/>
      <Route path='/room/:id' element={<Chat/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  </Routes>
  </>
  );
}

export default App;
