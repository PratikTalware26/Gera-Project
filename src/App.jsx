import { createContext, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Components/FormPopup.css"

import AllHomeComponents from './Components/AllHomeComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Thanks from './Components/Thanks';

export const ThanksContext = createContext()

function App() {
  const [thanksState, setThanksState] = useState(true)

  return (
    <>
    <BrowserRouter>
    <ThanksContext.Provider value={{thanksState, setThanksState}}>
      <Routes>
        <Route path='/' element={<AllHomeComponents/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
      </Routes>
      </ThanksContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
