import React from 'react'
import { useHistory } from "react-router-dom";

function Login({setChangeScreen}) {
    return (
        <div className='login d-flex justify-content-center align-items-center'>
            <div className='loginContent p-4'>
                <h5 className='pb-3'>Lorem Co.</h5>
                <div className='mb-3'>
                    <h6>Tekrar Hoşgeldiniz</h6>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                </div>
                <div className='sendButton p-2 mt-4' onClick={() => useHistory.push("")}>
                    Giriş Yap
                </div>
                <div align="center" className='mt-2'>
                    <span style={{ color: "dark" }}> Şifremi Unuttum </span>
                </div>
                <div align="center" className='mt-4'>
                    Hesabınız yok mu? <span onClick={() => setChangeScreen(false)} style={{ color: "dark" }}> Şimdi Kaydolun </span>
                </div>
            </div>
        </div>
    )
}

export default Login