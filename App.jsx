import { useState } from "react"



function App() {


  const [number, setNumber]=useState(0)


  const chanceBumber=()=>{



    setNumber(number+1);


  }


  const changeNumber=()=>{


setNumber(number-1);

  }
  return (
    <>
<input type="text"  value={number} onChange={()=>setNumber()}/>
<button  onClick={chanceBumber}>+</button>
<button  onClick={changeNumber}>-</button>

     
    </>
  )
}

export default App
