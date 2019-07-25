import React, { Component } from 'react';
import axios from 'axios';
import { readTasks } from '../../redux/dataReducer';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Task from '../Task/Task';

const TaskContainer = styled.div`
box-sizing: border-box;
padding: 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 10;
height: 100%;
width: 100%;
`

const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: sans-serif;
font-size: 35px;
font-weight: 100;
letter-spacing: 2px;
background-color: RGBA(0, 0, 0, 0.3);
color: white;
width: 100%;
height: 60px;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@keyframes (1024 X 1366 ) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

`

class TaskDisplay extends Component {

    componentDidMount(){
        axios.get('/auth/tasks').then(res => { 
            console.log(res.data, "this is getting tasks")
            this.props.readTasks(res.data)})
        
    }

    render(){   
        const tasks = this.props.data.tasks.map((element, i) => {
            return (
                <div>
                    <Task key={i}
                        first={element.first_name}
                        last={element.last_name}
                        task={element.task}
                        color={element.color}
                        item={element.style}
                        show={element.show_name}
                        id={element.task_id}
                    />
                </div>
            )
        }) 
        return (
            <TaskContainer>
                <Title>Tasks</Title>
                    <Wrapper>
                        {tasks}
                    </Wrapper>
                
            </TaskContainer>
        ) 
        
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(
    mapStateToProps,
    { readTasks }
)(TaskDisplay)