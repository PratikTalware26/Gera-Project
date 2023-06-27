import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AllHomeComponents from './Components/AllHomeComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllHomeComponents/>
    </>
  )
}

export default App
