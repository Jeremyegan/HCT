import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginForm = styled.div`
font-family: "Gill Sans", sans-serif;
font-weight: 600;
position: fixed;
top: 15em;
z-index: 5;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: .5em;
color: rgba(220, 237, 255);
`

const FormContainer = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3em;
width: 17em;
height: 27em;
background-color: rgba(6, 24, 38, 0.9);
box-shadow: inset 0px 0px 15px 1px rgb(220, 237, 255);
border-radius: 5px;
`
const Form1 = styled.div`
display: flex;
flex-direction: column;
padding: 2em;
border-bottom: 2px dashed;
`
const Form2 = styled.div`
display: flex;
flex-direction: column;
justify-ctonent: center;
align-items: center;
padding: 2em;
`

const Input = styled.input`
border-radius: 8px;
height: 30px;
width: 20em;
background-color: rgb(220, 237, 255);
color: black;


`

const Button = styled.button`
border-radius: 4px;
background-color: rgba(177, 205, 220);
height: 25px;
font-size: 15px;
font-weight: 400;
`

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
            <LoginForm>
                <FormContainer>
                <h1>Login</h1>
                <Form1>
                    <label>Email Address</label><br />
                    <Input type="text" className="form-input" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}/>
                </Form1>
                <Form1>
                    <label>Password</label><br />
                    <Input type={this.state.hidden ? "password" : "text"} className="form-input" 
                    placeholder="Password" 
                    onChange={(e) => this.setState({ password: e.target.value })} 
                    value={this.state.password} /><br />
                    <Button className="toggle-btn" onClick={this.toggleShow}>Show / Hide</Button>
                </Form1>
                <Form2>
                <div className='btn-container'>
                <Button className='btn-login' type="submit" onClick={() => this.login()}>Log in</Button>
                </div><br />
                Must be an admin to create account
                </Form2>
                </FormContainer>
            </LoginForm>
        </div>
        )
    }
}