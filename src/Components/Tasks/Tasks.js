import React, { Component } from 'react';
import axios from 'axios';
import { readTasks } from '../../redux/dataReducer';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TaskContainer = styled.div`
box-sizing: border-box;
padding: 2em;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`

const TaskCard = styled.div`
border: 2px solid green ;
margin: 10px;
display: flex;
width: 12em;
height: 15em;
flex-direction: column;
align-items: left;
justify-content: space-between;
padding: 1em;
`


const Name = styled.div`
border-bottom: 1px solid black;
padding-bottom: 1em;
height: 20px;
`

const Button = styled.button`
border: 2px solid black;
border-radius: 5px;
height: 25px;

`

const BtnCont = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: space-around;
width: 100%;
padding: 10px;

`

const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-family: serif, constantia;
font-size: 35px;
font-weight: 900;
letter-spacing: 2px;

`



class Tasks extends Component {
    componentDidMount(){
        axios.get('auth/tasks').then(res => this.props.readTasks(res.data))
        
    }

    render(){
        console.log(this.props)
        const tasks = this.props.data.tasks.map((task, i) => {
            return (
                <TaskCard>
                    <div>
                    <Name>Name: {task.first_name} {task.last_name}</Name> <br />
                    Task: {task.task} <br />
                    Item: {task.style} <br />
                    Color: {task.color} <br />
                    Show: {task.show_name} <br />
                    </div>
                    <BtnCont>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </BtnCont>
                </TaskCard>
            )
        })
        console.log(this.props.data)
        return (
            <div>
                <Title>Tasks</Title>
            <TaskContainer>
                {tasks}
            </TaskContainer>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(
    mapStateToProps,
    { readTasks }
)(Tasks)