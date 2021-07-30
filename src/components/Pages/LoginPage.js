import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../redux/authorization/authorizationActions'
import './Page.css'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleEmail = useCallback(({ target }) => {
        setEmail(target.value)
    }, [])

    const handlePassword = useCallback(({ target }) => {
        setPassword(target.value)
    }, [])
    
    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(postLogin({'email': email, 'password': password}))
        setEmail('')
        setPassword('')
     }, [dispatch, email, password])
        
    return (
        <div>
            <h1>Login Page</h1>
            <form
                className="form"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label className="formLabel">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                    />
                </label>
                <label className="formLabel">
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage