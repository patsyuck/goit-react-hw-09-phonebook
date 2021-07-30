import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { postRegistration } from '../../redux/authorization/authorizationActions'
import './Page.css'

function LoginPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleName = useCallback(({ target }) => {
        setName(target.value)
    }, [])

    const handleEmail = useCallback(({ target }) => {
        setEmail(target.value)
    }, [])

    const handlePassword = useCallback(({ target }) => {
        setPassword(target.value)
    }, [])
    
    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(postRegistration({'name': name, 'email': email, 'password': password}))
        setName('')
        setEmail('')
        setPassword('')
    }, [dispatch, email, name, password])

    return (
        <div>
            <h1>Registration Page</h1>
            <form
                className="form"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label className="formLabel">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleName}
                    />
                </label>
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
                <button type="submit">Registration</button>
            </form>
        </div>
    )
}

export default LoginPage