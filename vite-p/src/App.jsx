import Event from "./Event"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Props from "./Props"
let a = prompt("Enter your name")
function App()
{
  return(
    <>
    <Navbar/>
    <Hero/>
    <Event/>
    <Props name = {a}/>
    </>
  )
}
export default App 