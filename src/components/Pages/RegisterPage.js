import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postRegistration } from '../../redux/authorization/authorizationActions'
import './Page.css'

class LoginPage extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({[name]: value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({name: '', email: '', password: ''})
     }
    
    render() {
        const { name, email, password } = this.state
        
        return (
            <div>
                <h1>Registration Page</h1>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                >
                    <label className="formLabel">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="formLabel">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="formLabel">
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Registration</button>
                </form>
            </div>
        )
    }
}

/*const mapDispatchToProps = dispatch => {
    return {
        onSubmit: credentials => dispatch(postRegistration(credentials))
    }
}*/

const mapDispatchToProps = {
    onSubmit: postRegistration
}

export default connect(null, mapDispatchToProps)(LoginPage)