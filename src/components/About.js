import React, { useState } from 'react';

export default function About() {
    const [btnText, setbtnText] = useState("Enable dark mode");
    const [myStyle, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    const handleClick = () => {
        if (myStyle.color === "black") {
            setStyle({
                color: "white",
                backgroundColor: "black",
                border: "2px solid red"
            })
            setbtnText("enable light mode")

        } else {
            setStyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtnText("enable dark mode")

        }
    }
    return ( <
        div >
        <
        div style = { myStyle }
        className = "container" >
        <
        h1 > I - notes < /h1> <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio, reprehenderit! < /p> <
        button onClick = { handleClick }
        style = { myStyle } > { btnText } < /button> <
        label htmlFor = "cb" > < /label> <
        input id = "cb"
        onClick = { handleClick }
        type = "checkbox" / >
        <
        /div> < /
        div >
    )
}