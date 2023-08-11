import React, { useState } from 'react'
import "./LoginScreen.css"
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn,setSignin]=useState(false);
  return (
    <div className='LoginScreen'>
        <div className='LoginScreen__background'>
            <img className='LoginScreen__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
            <button className='LoginScreen__button' onClick={()=>setSignin(true)}>Sign In</button>
            <div className='LoginScreen__gradient'/>
        </div>
        <div className='LoginScreen_body'>
            {signIn?
         (<SignupScreen/>):
         <>
         <h1>Unlimited films Tv programmes and much more.</h1>
         <h2>Watch anywhere.Cancel at anytime</h2>
         <h3>Ready to watch?Enter your Email to create or restart your membership</h3>
         <div className='LoginScreen_input'>
         <form>
             <input type='email' placeholder='Email Address' />
             <button onClick={()=>setSignin(true)} className='LoginScreen_getStarted'>GET STARTED</button>
         </form>
     </div>
     </>
        }
           
        </div>
       
    </div>
  )
}

export default LoginScreen