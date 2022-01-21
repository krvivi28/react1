import React,{useState} from "react";

export default function Form() {
    
    const handleClick=()=>
    {
        console.log("you clicked on add button");
        let newText=text.toUpperCase;
        setText(newText);
    }
    const handleChange=(event)=>
    {  
        console.log("onchange fired");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here');
  return (
    <>
      <div class="cont">
        <label for="myBox" >textarea</label>
        <textarea className="textarea" onChange={handleChange} id="myBox" rows="8" value={text}></textarea>
        <button onClick={handleClick} className="btn">add</button>
        <button className="btn">delete</button>
      </div>
    </>
  );
}
