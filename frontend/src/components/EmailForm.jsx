import { useState } from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
function EmailForm() {
  const [email, setEmail] = useState('');
  

  const navigate = useNavigate()
  const OnEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onSubmit = () => {
    console.log(email);
    axios.post('http://localhost:3002/send-otp',{email:email}).then((res) => {
      console.log(res.data);
      // if(res.data){
      navigate("/verify")
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

export default EmailForm;
