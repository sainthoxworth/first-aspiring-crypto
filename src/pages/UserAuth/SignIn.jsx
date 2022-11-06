import React from 'react'

function SignIn({setChangeScreen}) {
  return (
    <div className='login d-flex justify-content-center align-items-center'>
        <div className='loginContent p-4'>
          <h5 className='pb-3'>Lorem Co.</h5>
          <div className='mb-3'>
            <h6>Hesap Oluştur</h6>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="RepeatPassword" aria-label="RepeatPassword" aria-describedby="basic-addon1"/>
          </div>
          <div className='sendButton p-2 mt-4'>
            Hesap Oluştur
          </div>
          <div align = "center" className='mt-2'>
            Zaten hesabınız var mı? <span onClick={() => setChangeScreen(true)} style = {{color: "dark"}}> Giriş Yapın </span>
          </div>
        </div>
      </div>
  )
}

export default SignIn