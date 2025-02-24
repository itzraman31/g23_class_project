import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello world</h1>
    <h2>This is my first react app</h2>
    <h3>My app deploy on AWS EC2</h3>
    <h4>Deploy my me</h4>
    </>
  )
}

export default App
