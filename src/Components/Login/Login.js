import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            user: {},
            hidden: true,
            register: true,
            admin: false
        }   
        this.toggleShow = this.toggleShow.bind(this);
        this.login = this.login.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
        this.toggleBack = this.toggleBack.bind(this);
    }


    async login(e) {
        console.log(this.state)
        if (e) e.preventDefault();
        const { email, password } = this.state;
        await axios.post('/auth/login', { email, password }).then(res => {
            this.props.history.push("/user");
        })
        }


    toggleShow(e) {
        e.preventDefault()
        this.setState({ hidden: !this.state.hidden });
    }

    toggleRegister(e) {
        e.preventDefault()
        this.setState({ register: false })
    }

    toggleBack(e) {
        e.preventDefault()
        this.setState({ register: true })
    }


    register = async () => {
        const { first_name, last_name, email, password } = this.state;
        const res = await axios.post('/auth/register', { first_name, last_name, email, password });
        console.log("register post", this.state)
        if (res.data.loggedIn) this.props.history.push('/user')
        else alert('Registration failed')
        console.log('register gone wrong')
        };

    handleChange = admin => event => {
        console.log('hit')
        this.setState({ [admin]: event.target.checked });
        };  

   

    render(){
        console.log(this.props)
    return (
        this.state.register ? (
        <div>
            <LoginForm>
                <FormContainer>
                <h1>Login</h1>
                <Form1>
                    <label>Email Address</label><br />
                    <Input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}/>
                </Form1>
                <Form1>
                    <label>Password</label><br />
                    <Input type={this.state.hidden ? "password" : "text"} 
                    placeholder="Password" 
                    onChange={(e) => this.setState({ password: e.target.value })} 
                    value={this.state.password} /><br />
                    <Button className="toggle-btn" onClick={this.toggleShow}>Show / Hide</Button>
                </Form1>
                <Form2>
                <div className='btn-container'>
                <Button type="submit" onClick={() => this.login()}>Log in</Button>
                </div><br />
                Don't have an account?
                <Button onClick={this.toggleRegister}>Register Here</Button>
                </Form2>
                </FormContainer>
            </LoginForm>
        </div>
        ) : (
        <div>
            <LoginForm>
            <FormContainer>
            <h1>HCT Costumes</h1>
            <div className='name-form'>
                <label>Employee's Name</label><br />
                <Input type="text" placeholder="First Name" onChange={(e) => this.setState({ first_name: e.target.value })} value={this.state.first_name} />
            </div>
            <div className='name-form'>
                <Input type="text" placeholder="Last Name" onChange={(e) => this.setState({ last_name: e.target.value })} value={this.state.last_name} />
                </div>
            <div className='form'>
                <label>Email</label><br />
                <Input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}/>
            </div>
            <div className='form'>
                <label>Password</label><br />
                <Input type="text" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
            {/* <Input type="radio"
                checked={this.state.admin}
                onChange={this.handleChange('checked')}
                value="checked"
                /> */}
            </div>
                <Button className='btn-login' type="submit" onClick={() => this.register()}>Register</Button><br />
                <Button onClick={this.toggleBack}>Back</Button>
                </FormContainer>
            </LoginForm>
            </div>
            
        )  
    )    
    }
}

export default withRouter(Login)