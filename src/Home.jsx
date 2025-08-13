import Navbar from './Navbar'
import './App.css'
import About from './About';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const[text,settext]=useState("");
  const[MyStyle,setMyStyle]=useState({
    color:"black",
    backgroundColor:"white"
  })
  
  const toggleState=()=>{
    if(MyStyle.color=="white"){
      setMyStyle({
        color:"black",
        backgroundColor:"white"
      })
    
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";}
    else{
      setMyStyle({
        color:"white",
        backgroundColor:"black"
      })
      document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    }
  }
  function ChangeText(){
    let NewText=text.toUpperCase();
    settext(NewText)
  }
  function OnChangeHandle(e){
    settext(e.target.value)
  }
  
  return (
    <>
    
    <div className='container' style={MyStyle}>
      
      <h1>Enter Text In The Field</h1><br></br><div className="content">
     <textarea className="textar"placeholder="Type something.." value={text} onChange={OnChangeHandle}></textarea><br></br>
     <button className="btn" onClick={ChangeText} >convert to Uppercase</button>
     </div>
     <h2>{text.trim().split(" ").filter(word=>word!=="").length}Words And {text.replace(/\s/g, "").length} Characters</h2>
     <button className="dm"onClick={toggleState}>{MyStyle.color=="black"? "Dark mode":"light Mode"}</button></div>
     
    </>
  )
}

export default App
