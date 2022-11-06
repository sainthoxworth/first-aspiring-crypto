import './style.css';
import SignIn from './SignIn';
import { useState } from 'react';
import Login from './Login';

export function UserAuth() {
  const [changeScreen, setChangeScreen] = useState(true)
  return (
    <div className="App">
      {changeScreen === false ?
        <SignIn setChangeScreen={setChangeScreen}></SignIn> :
        <Login setChangeScreen={setChangeScreen}></Login>
      }
    </div>
  );
}
