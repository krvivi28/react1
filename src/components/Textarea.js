import React, {useState} from 'react';

export default function Textarea() {
   const clickHandlebtn=()=>
    {
        console.log("you have clicked");
        let ntext=text.toUpperCase();
        setText(ntext);
    
    }
  const  handleonChange=(event)=>
    {  
        console.log("onchange fired");
        setText(event.target.value);
    }
    const [text,setText]=useState('pls write here');
    return (
        <>
        <div>
            <div className="container"></div>
            <textarea value={text} onChange={handleonChange} name="text" id="" cols="30" rows="10" ></textarea>
            <button className="btn" onClick={clickHandlebtn}>Convert_UpperCase</button>
            
        </div>
        <div className="sumary">
            <h2>yout text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}

