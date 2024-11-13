import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [email, setEmail] = useState('');
  const OnEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onSubmit = () => {
    console.log(email);
    const navigate = useNavigate()
    axios.post('http://localhost:3002/send-otp',{email:email}).then((res) => {
      console.log(res.data);
      // if(res.data){

      // }
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <label htmlFor="email">Email ID</label>
      <input type="email" name="email" id="email" value={email} onChange={OnEmailChange} style={{margin:"10px",padding:"8px"}}/><br/>
      <button type="button" onClick={onSubmit}>Submit</button>
    </>
  )
}

export default App
