import React from 'react';
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div className="py-5" style={{background:"#e4f5ff", minHeight:"100vh", marginRight:"20px",marginLeft:"20px", marginBottom:"20px",marginTop:"20p"}}>
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4" style={{}}>
      <h3 className='text-center title'>Reset Password</h3>
      <p className='text-center'>Please enter your new password.</p>
      <form action=''>
        <CustomInput type="password" label="New Password" id="pass" />
        <CustomInput type="password" label="Confirm Password" id="confirmpass" />
        <button
        className='border-0 px-3 py-2 text-white fw-bold w-100'
        style={{background:"#0090ff"}}
        type='submit'
        >
        Reset Password
        </button>
      </form>
    </div>
  </div>
  )
}

export default Resetpassword