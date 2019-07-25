import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FiUser, FiAtSign, FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import "./Login.css";

const LoginForm = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-weight: 100;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(220, 237, 255);
  margin: 0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18em;
  height: 27em;
  border-radius: 5px;
`;
const Form1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 15em;
  width: 20em;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 1.5px;
`;
const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-ctonent: center;
  align-items: center;
  padding: 2em;
`;

const Input = styled.input`
  height: 30px;
  width: 13em;
  background: transparent;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  
`;

const Input2 = styled.input`
  height: 30px;
  width: 11.5em;
  background: transparent;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  
`;

const Input3 = styled.input`
  height: 30px;
  width: 5.5em;
  background: transparent;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
  font-size: 18px;
  border: 0px;
  border-bottom: 1px solid white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  
`;

const Button = styled.button`
  border-radius: 4px;
  border: 0;
  background-color: #212121;
  font-size: 13px;
  font-weight: 100;
  font-family: "Gill Sans", sans-serif;
  padding: 4px 10px;
  color: white;
  margin: 5px;

  :hover {
    color: #4a4a4a;
  }
`;

const Button1 = styled.button`
  border-radius: 4px;
  border: 0;
  background-color: #212121;
  color: #fff;
  font-size: 25px;
  font-weight: 100;
  font-family: "Gill Sans", sans-serif;
  padding: 5px 20px;
  margin: 30px 10px;

  :hover {
    color: #4a4a4a;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      user: {},
      hidden: true,
      register: true,
      admin: false,
      id: null
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.login = this.login.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
    this.toggleBack = this.toggleBack.bind(this);
  }

  async login(e) {
    console.log(this.state, "login");
    if (e) e.preventDefault();
    const { email, password } = this.state;
    await axios.post("/auth/login", { email, password }).then(res => {
      this.props.history.push("/user");
    });
  }

  toggleShow(e) {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  }

  toggleRegister(e) {
    e.preventDefault();
    this.setState({ register: false });
  }

  toggleBack(e) {
    e.preventDefault();
    this.setState({ register: true });
  }

  register = async () => {
    const { first_name, last_name, email, password } = this.state;
    const res = await axios.post("/auth/register", {
      first_name,
      last_name,
      email,
      password
    });
    console.log("register post", this.state);
    if (res.data.loggedIn) this.props.history.push("/user");
    else alert("Registration failed");
    console.log("register gone wrong");
  };

  handleChange = admin => event => {
    console.log("hit");
    this.setState({ [admin]: event.target.checked });
  };

  render() {
    console.log(this.state, "updated state");
    return this.state.register ? (
      <div>
        <LoginForm>
          <FormContainer>
            <h1 className="welcome">Welcome</h1>
            <Form1>
              <FiAtSign className="loginIcon" />
              <Input
                type="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </Form1>
            <Form1>
              <FiLock className="loginIcon" />
              <Input2
                type={this.state.hidden ? "password" : "text"}
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              <button className="viewButton" onClick={this.toggleShow}>
                {this.state.hidden ? (
                  <FiEye className="hidden" />
                ) : (
                  <FiEyeOff className="hidden" />
                )}
              </button>
            </Form1>
            <Form2>
              <div className="btn-container">
                <Button1 type="submit" onClick={() => this.login()}>
                  Log in
                </Button1>
              </div>
              <br />
              <p>Don't have an account?</p>
              <Button onClick={this.toggleRegister}>Register Here</Button>
            </Form2>
          </FormContainer>
        </LoginForm>
      </div>
    ) : (
      <div>
        <LoginForm>
          <FormContainer>
            <h1 className="welcome">Register</h1>
            <Form1>
              <FiUser className="loginIcon" />
              <Input3
                type="text"
                placeholder="First"
                onChange={e => this.setState({ first_name: e.target.value })}
                value={this.state.first_name}
              />

              <Input3
                type="text"
                placeholder="Last"
                onChange={e => this.setState({ last_name: e.target.value })}
                value={this.state.last_name}
              />
            </Form1>
            <Form1>
              <FiAtSign className="loginIcon" />
              <Input
                type="text"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </Form1>
            <Form1>
              <FiLock className="loginIcon" />
              <Input2
                type={this.state.hidden ? "password" : "text"}
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              <button className="viewButton" onClick={this.toggleShow}>
                {this.state.hidden ? (
                  <FiEye className="hidden" />
                ) : (
                  <FiEyeOff className="hidden" />
                )}
              </button>
              {/* <Input type="radio"
                checked={this.state.admin}
                onChange={this.handleChange('checked')}
                value="checked"
                /> */}
            </Form1>
            <Form1>
              <Button1 onClick={this.toggleBack}>Back</Button1>
              <Button1
                className="btn-login"
                type="submit"
                onClick={() => this.register()}
              >
                Register
              </Button1>
            </Form1>
          </FormContainer>
        </LoginForm>
      </div>
    );
  }
}

export default withRouter(Login);
