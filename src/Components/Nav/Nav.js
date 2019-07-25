import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { getData } from '../../redux/userReducer';
import { connect } from 'react-redux';


const Navbar = styled.div`
width: 100vw;
height: 10%;
background: RGBA(0, 0, 0, 0.6);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

const Links = styled(Link)`
color: #ECE3E6;
font-size: 25px;
font-weight: 100;
font-family: sans-serif;
margin: 20px;
text-decoration: none;
`
const Button = styled.button`
background-color: RGBA(0, 0, 0, 0.6);
color: white;
border: none;
height: 100%;
display: flex;
flex-direction: row;
justify-content: top;
font-size: 25px;
font-weight: 100;
font-family: sans-serif;
margin: -13px;
text-decoration: none;
border-color: RGBA(0, 0, 0, 0.6);
`



class Nav extends Component {
    // componentDidMount() {
    //     axios.get('/user/user-data').then((res) => {
    //         this.props.getData(res.data)
    //     })
    // }

    handleClick = () => {
        axios.get('/auth/logout')
    }
    
    render() {
        console.log(this.props.data, "this is nav")
        return (
            <Navbar>
                <Links to='/user'>Profile</Links>
                <Links to="/inventory">Inventory</Links>
                <Links to="/"><Button onClick={this.handleClick}>Logout</Button></Links>
            </Navbar>
        )}
}


function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(
    mapStateToProps,
    { getData }
)(Nav)