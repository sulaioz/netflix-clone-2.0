import React, { useRef } from 'react'
import './Signupscreen.css'
import { auth } from './firebase';

function Signupscreen() {

    const emailRef = useRef(null);
    const passwordfRef = useRef(null);


    const register = (e) => {
e.preventDefault();

auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordfRef.current.value
).then((authUser) => {

console.log(authUser)

}).catch(error => {

    alert(error.message)
});

    };

const signIn = (e) => {

    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordfRef.current.value

    ).then((authUser) => {

        console.log(authUser)
        
        })
        .catch(error => {

            alert(error.message)
        });

};

    
  return (
    <div className='signupscreen'>
<form>

    <h1>Sign In</h1>
    <input ref={emailRef} placeholder='Email' type='email' />
    <input ref={passwordfRef} placeholder='Password' type='password'/>
    <button type='submit' onClick={signIn}>Sign In</button>
    <h4>
        <span className='signupscreen_grey'>New to Netflix? </span>
       <span className='signupscreen_link' onClick={register}>Sign Up Now.</span> </h4>
</form>

    </div>
  )
  }
export default Signupscreen 