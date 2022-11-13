import React from 'react'
import { useHistory } from 'react-router-dom';

function Navbar() {
    const history = useHistory()
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className='d-flex flex-column'>
                    <p className="m-0">Tekrar hoşgeldiniz</p>
                    <p className="m-0">{localStorage.getItem("user")}</p>
                    </div>
                    <button type="button" className="btn btn-dark" onClick={() => {localStorage.removeItem("user"); history.push('userAuth')}}>
                        <span>Çıkış Yap</span>
                    </button>
                </div>
            </nav>
        </div>

    )
}

export default Navbar