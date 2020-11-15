import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'


function Login() {


    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = e => {
        e.preventDefault()
        //firebase stuff

    }

    const register = e => {
        e.preventDefault()

        //firebase stuff
        auth
            .createUserWithEmailAndPassword(email, password).then((auth) => {

                console.log(auth);

                if (auth) {
                    history.push('/')
                }

            })
            .catch(error => alert(error.message))

        // jevha authentication hoil tevha  

    }


    return (
        <div className="login">



            <Link to="">

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="login_logo" alt="" />
            </Link>

            <div className="login_container">

                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

                    <button className="login_signin_btn" type='submit' onClick={signIn} >Sign-In</button>

                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE COnditions of Use & sale. Please see our Privacy Notice, Our Cookies Notice and our Interest-Based Ads Notice</p>

                <button className="login_register_btn" onClick={register}  >Create New Amazon Account</button>



            </div>


        </div>
    )
}

export default Login
