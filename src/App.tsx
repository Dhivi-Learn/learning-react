import {memo, startTransition, useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from "./ChildComponent.tsx";


function App() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    console.log("Component Mounted")
  }, []);

const handleCount = ()=>{
    startTransition(()=>{
    setCount(prev=> prev +1);
    console.log(count);
    })
}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <ChildComponent/>
    </>
  )
}

export default memo(App)
