import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function Login() {
    const SignIn=()=>{
        signInWithPopup(auth, provider).catch(error=>alert(error.message))
    }
  return (
    <div className="login">
        <div className="login_logo">
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color.png" alt=""></img>
        </div>
        <Button onClick={SignIn}>Sign In</Button>
    </div>
  )
}

export default Login;