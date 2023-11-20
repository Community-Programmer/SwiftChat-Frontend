import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>


    </Route>
  </Routes>
  </>
  );
}

export default App;
