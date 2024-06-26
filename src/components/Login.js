import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
    const fullName = useRef(null)

    const handleValidation = () => {
        setErrorMessage(checkValidation(email.current.value, password.current.value, fullName?.current?.value))
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background image' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute p-12 bg-black opacity-80 my-36 mx-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input className='py-2 my-4 w-full bg-gray-700 text-center' type="text" placeholder="Full Name " name="fullname" ref={fullName} />}
                <input className='py-2 my-4 w-full bg-gray-700 text-center' type="text" placeholder="Email Address" name="email" ref={email} />
                <input className='py-2 my-4 w-full bg-gray-700 text-center' type="text" placeholder="Password" name="password" ref={password} />
                {errorMessage && <p className='text-red-700 font-bold'>{errorMessage}</p>}
                <button type="submit" onClick={handleValidation} className='py-2 my-6 w-full bg-red-700'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Alreay a user ? Sign In now'}</p>
            </form>
        </div>
    )
}

export default Login