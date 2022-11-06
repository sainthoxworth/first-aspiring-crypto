import React from 'react'

function Market() {
  return (
    <div className='container-fluid'>
        <div className='shadow border p-3'>
        <h4 className='mb-3'>Market</h4>
            {[...Array(10)].map((e,i) => (
                <div key = {i} className='d-flex border p-3 mb-2'>{i+1} - ETH <span className='ms-auto'>$xx,y</span></div>
            ))}
        </div>
    </div>
  )
}

export default Market