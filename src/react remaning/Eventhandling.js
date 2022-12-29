import { useEffect,useState } from "react"

function Eventhandling() {
    const [count,setCount]=useState(0)
    const[name,setName]=useState()
    useEffect(()=>{
        console.log('useEffect-updating document title')
        document.title =`React practise ${count} times`
    }, [count])
  return (
    <>
    <input type='text'value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>setCount(count+1)}>click {count} times</button>
    </>
  )
}

export default Eventhandling