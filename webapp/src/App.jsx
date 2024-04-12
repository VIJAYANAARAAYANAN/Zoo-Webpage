import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Headpenguin from './components/Headpenguin/Headpenguin'
import Events from './components/Events/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar/>
     <Headpenguin/>
     <Events/>
    </div>
  )
}

export default App
