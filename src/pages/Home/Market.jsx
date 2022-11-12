import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Market() {
  const apiUrl = "http://localhost:5000/"
  const [coins, setCoins] = useState([]) 
  useEffect(() => {
    axios.get(apiUrl + 'api/Coins')
      .then(function (response) {
        setCoins(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
    [])

  return (
    <div className='container-fluid'>
      <div className='shadow border p-3'>
        <h4 className='mb-3'>Market</h4>
        {coins.map((e, i) => (
          <div key={i} className='d-flex border p-3 mb-2'>{i + 1} - {e.coinName} <span className='ms-auto'>{e.coinValue}</span></div>
        ))}
      </div>
    </div>
  )
}

export default Market