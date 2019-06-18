import React, { Component } from 'react';
import axios from 'axios';
import { readTasks } from '../../redux/dataReducer';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Task from '../Task/Task';

const TaskContainer = styled.div`
box-sizing: border-box;
padding: 2em;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
z-index: 10;

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



class TaskDisplay extends Component {
    constructor() {
        super()
            this.state = {
                task: [],
                task_id: '',
                item_id: '',
                show_id: ''

            }
    }

    componentDidMount(){
        axios.get('auth/tasks').then(res => { 
            this.props.readTasks(res.data)})
        
    }

    render(){  
        console.log(this.props)   
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
)(TaskDisplay)