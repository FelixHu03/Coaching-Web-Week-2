import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserData from './UserData'

function App() {
 
  const [count, setCount] = useState (0);
  const [name, setName] = useState("");
  const handleSetName = (event) => {
    setName(event.target.value);
  }

  const printNama = () =>{
    alert ("Hello " + name + " Selamat Datang");
  }
  const handleCountClik = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);


  return (
    <div>
      <div className="counter">
      <button onClick={handleCountClik}>Change Counter 2 Time Cliked</button>
      </div>

      <div className="identity">
        <h1><p>MY Identity</p></h1>
        <ul>
          <li>Felix</li>  
          <li>2327250059</li>
          <li> <a href="https://github.com/FelixHu03"> My github </a></li>
        </ul>
      </div>

      <div className="tableInput">
        <input type="text" value={name} onChange={handleSetName} /> <br/>
        <button onClick={printNama}>Submit</button>
      </div>
    </div>
  )
}

export default App;
