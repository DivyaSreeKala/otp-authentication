
import './App.css'

import { Route, Routes, useNavigate } from 'react-router-dom'
import OtpVerification from './components/OtpVerification'
import EmailForm from './components/EmailForm'
import Home from './components/Home'
function App() {
 
  return (
    <>
    <Routes>
    <Route path='/' element={<EmailForm/>}/> 
      <Route path='/verify' element={<OtpVerification/>}/> 
      <Route path='/home' element={<Home/>}/> 
    </Routes>

    </>
  )
}

export default App
