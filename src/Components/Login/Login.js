import React, { Component } from 'react';
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            hidden: true,
            user: {}
        }   
        this.toggleShow = this.toggleShow.bind(this);
        this.login = this.login.bind(this)
    }


    async login(e) {
        console.log(this.state)
        if (e) e.preventDefault();
        const { email, password } = this.state;
        try { 
            const res = await axios.post('/auth/login', { email, password });
            console.log(res.data, "duuude logged in")
            if (res.data.loggedIn) this.props.history.push('/');
            }   catch (e) {
                alert('Login failed');
            }
        }


    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    render(){
    return(
        <div>
            <div className='login-form'>
                <h1>HCT Costumes</h1><br />
                <div className="form-container">
                <div className='form'>
                    <h2>Login</h2>
                    <label>Email Address</label><br />
                    <input type="text" className="form-input" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}/>
                </div>
                <div className='form'>
                    <label>Password</label><br />
                    <input type={this.state.hidden ? "password" : "text"} className="form-input" 
                    placeholder="Password" 
                    onChange={(e) => this.setState({ password: e.target.value })} 
                    value={this.state.password} /><br />
                    <button className="toggle-btn" onClick={this.toggleShow}>Show / Hide</button>
                </div>
                <div className='btn-container'>
                <button className='btn-login' type="submit" onClick={() => this.login()}>Log in</button>
                </div>
                <p>Must be an admin to create account</p>
                </div>
            </div>
        </div>
        )
    }
}