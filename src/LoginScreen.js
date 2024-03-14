import React, { useState } from 'react'

import './LoginScreen.css'
import Signupscreen from './Signupscreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

  return (
    < div className='loginscreen' > 

<div className='loginscreen_background'>
<img className='loginscreen_logo' src='https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png' />

<button onClick={() => setSignIn(true) } className='loginscreen_button'>

    Sign In
</button>
<div className="loginscreen_gradient" />
</div>

<div className='loginscreen_body' >
    {signIn ? (
        <Signupscreen/>

    ):(
<>
<h1>Unlimited Films, Tv Programmes and more.</h1>
<h2>Watch anywhere.Cancel at any time.</h2>
<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

<div className='loginscreen_input'>
<form>
    <input type='email' 
    placeholder='Email Address' /> 

    <button onClick={() => setSignIn(true)} className='loginscreen_getstarted'>

        GET STARTED
    </button>
</form>

</div>
</>

    )}


    </div>
    </div>
  )
}

export default LoginScreen