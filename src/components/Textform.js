import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText]=useState("Enter text here");
    const handleOnClick=()=>{
        console.log("Button was clicked");
        setText("Button was Clicked");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);    
    }

    return (
    <div className='container' style={{color:props.mode === "light" ? "black":"white"}}>
        <h1>{props.heading1}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading2}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "light" ? "white":"grey",color:props.mode === "light" ? "black":"white"}} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert</button>
    </div>
  )
}
