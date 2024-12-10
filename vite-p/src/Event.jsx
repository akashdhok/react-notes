import React from 'react'
import "./Event.css"
export default function Event() {
    function click()
    {
        window.alert("Clicked")
    }
    function cl()
    {
        window.alert("Double clicked")
    }
    function change()
    {
        let a = document.querySelector("#container")
        a.style.backgroundColor = "red"
    }
    function change1()
    {
        let a = document.querySelector("#container")
        a.style.backgroundColor = "blue"
    }
  return (
   <>
   <button onClick={click}>Click Here</button>
   <button onDoubleClick={cl}>dblclick</button>
   <div id='container' onMouseEnter={change} onMouseLeave={change1}></div>

   </>
  )
}
