import React from 'react'

function Information() {
    return (
        <div className='container-fluid my-3'>
            <div className='d-flex justify-content-center'>
                <div className='button border p-3 me-3' style={{width:"40%"}} align = 'center' onClick={() => {window.location.href='https://www.linkedin.com/in/ahmetfsirma/'}}>Hakkımda</div>
                <div className='button border p-3' style={{width:"60%"}} align = 'center' onClick={() => {window.location.href='https://excalidraw.com/#json=t34gCbLb4CukK6-tyW1ff,d6ZasbWQZQr0gjKmdWDOQw'}}>Yapım Algoritması</div>
            </div>
        </div>

    )
}

export default Information