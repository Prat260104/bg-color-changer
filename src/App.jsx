import { useState } from "react"


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>(setColor("red"))} //onclick expect karta h ki aap use ek function do tabhi is syntax m likhenge
          className="outline_none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button onClick={()=>(setColor("green"))}
          className="outline_none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button
          onClick={()=>(setColor("blue"))}
          className="outline_none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue</button>
           <button
          onClick={()=>(setColor("cyan"))}
          className="outline_none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"cyan"}}
          >Cyan</button>
           <button
          onClick={()=>(setColor("purple"))}
          className="outline_none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}
          >Purple</button>
           <button
          onClick={()=>(setColor("black"))}
          className="outline_none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}
          >black</button>

        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
