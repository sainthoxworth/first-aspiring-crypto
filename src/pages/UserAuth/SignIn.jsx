import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';

function SignIn({ setChangeScreen }) {
  const apiUrl = "http://localhost:5000/"
  const history = useHistory()
  const sendRegisterRequest = (e) => {
    // console.log(e.target)
    e.preventDefault()
    const formElement = e.target;
    const userName = formElement[0].value
    const userPassword = formElement[1].value
    const userPasswordAcknowledge = formElement[2].value

    axios.post(apiUrl + 'api/UserCredentials', {
      userName: userName,
      userPassword: userPassword,
    })
      .then(function (response) {
        console.log(response)
        if (response.status === 201) {
          for (let item of formElement) {
            item.value = ''
          }
          history.push('')
          alert('Kayıt Başarılı')
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Kayıt Başarısız")
      });

  }
  return (
    <div className='login d-flex justify-content-center align-items-center'>
      <div className='loginContent p-4'>
        <h5 className='pb-3'>Lorem Co.</h5>
        <div className='mb-3'>
          <h6>Hesap Oluştur</h6>
        </div>
        <form onSubmit={(e) => sendRegisterRequest(e)}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="RepeatPassword" aria-label="RepeatPassword" aria-describedby="basic-addon1" />
          </div>
          <button className='w-100 sendButton p-2 mt-4'>
            Hesap Oluştur
          </button>
        </form>
        <div align="center" className='mt-2'>
          Zaten hesabınız var mı? <span onClick={() => setChangeScreen(true)} style={{ color: "dark" }}> Giriş Yapın </span>
        </div>
      </div>
    </div>
  )
}

export default SignIn