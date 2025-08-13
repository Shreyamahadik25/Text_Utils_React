import Navbar from './Navbar'
import './App.css'
import About from './About';

import { Routes, Route } from 'react-router-dom';
import Home from './Home'

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/About" element={<About />} />
    </Routes>
   </>
  )
}

export default App
