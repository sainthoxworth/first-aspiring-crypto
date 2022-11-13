import axios from 'axios';
import React from 'react'
import { useHistory } from "react-router-dom";


function Login({ setChangeScreen }) {
    const history = useHistory()
    const apiUrl = "http://localhost:5000/"
    const sendLoginRequest = (e) => {
        e.preventDefault()
        const formElement = e.target;
        console.log(formElement)
        const userName = formElement[0].value
        const userPassword = formElement[1].value
        axios.post(apiUrl + 'api/UserCredentials/CheckUser', {
            userName: userName,
            userPassword: userPassword
        })
            .then(function (response) {
                if (response.data === "Giriş Başarılı") {
                    for (let item of formElement) {
                        item.value = ''
                    }
                    alert('Giriş Başarılı')
                    localStorage.setItem('user', userName)
                    history.push('')
                } else {
                    alert("Giriş Başarısız")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='login d-flex justify-content-center align-items-center'>
            <div className='loginContent p-4'>
                <h5 className='pb-3'>Lorem Co.</h5>
                <div className='mb-3'>
                    <h6>Tekrar Hoşgeldiniz</h6>
                </div>
                <form onSubmit={(e) => sendLoginRequest(e)}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>
                    <button className='w-100 sendButton p-2 mt-4' >
                        Giriş Yap
                    </button>
                </form>
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