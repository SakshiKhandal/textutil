import React from 'react';
import { useState } from 'react';



export default function TextForm(props) {

    const [text, setText ] = useState('');
    const handleUpClick = () => {
        console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Uppercase","success");
    }
    
    const handleDownClick = () => {
        console.log("Lowercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);  
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        console.log("Clear was clicked : " + text);
        setText('');
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value); // through this we can change the text in the text area
        
    }
    return (
   <div className="container" style = {{color : props.mode==="dark"?"white":"black"}}>
    <div >  
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==="dark"?"black":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleClearClick}>Clear</button>
    </div>
    <div className=" container my-3" >
        <h1>your text summmary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter your text in the text box above to preview here"}</p>
    </div>
   </div>
  )
}
