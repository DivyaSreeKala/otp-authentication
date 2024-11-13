import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function OtpVerification() {

  const [otp, setOtp] = useState('');

  const navigate = useNavigate()
  const OnOtpChange = (e) => {
    setOtp(e.target.value);
  }
 
  const onVerify = () => {
    console.log(otp);
    axios.get('http://localhost:3002/verify-email/'+otp).then((res) => {
      console.log(res.data);
      alert("successfull")
      if(res.data){
      navigate("/home")
      }
    }).catch((err) => {
        alert("error")
      console.log(err)
    })
  }
  return (
    <>
      

      <label>verify otp</label>
      <input type="email" name="otp" id="otp" value={otp} onChange={OnOtpChange} style={{margin:"10px",padding:"8px"}}/><br/>
      <button type="button" onClick={onVerify}>Submit</button>
    </>
  )
}

export default OtpVerification;
