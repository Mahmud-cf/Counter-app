import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [value,setValue]=useState(0)
  const increse =(pluse)=>{
    setValue(value+pluse)
  }
  const dicrese =(maines)=>{
    setValue(value-maines)
  }
  
  return (
    <div className="container">
      <h1>Hare is the number{value}</h1>
      <div className="button">
        <button onClick={()=>increse(1)} >increse the number 1</button>
        <button onClick={()=>increse(20)} >increse the number 20</button>
        <button onClick={()=>increse(100)} >increse the number 100</button>
        <button onClick={()=>dicrese(1)} >increse the number 1</button>
        <button onClick={()=>dicrese(20)} >increse the number 20</button>
        <button onClick={()=>dicrese(100)} >increse the number 100</button>
      </div>
    </div>
)
}

export default App;
