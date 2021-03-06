import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { editTask, readTasks, deleteTask } from '../../redux/dataReducer';
import axios from 'axios';

const TaskCard = styled.div`
border: none;
border-radius: 5px;
margin: 10px;
display: flex;
width: auto;
height: auto;
flex-direction: row;
align-items: left;
justify-content: space-between;
padding: 1em;
background: RGBA(0, 0, 0, 0.3);
color: white;
`


const Name = styled.div`
border-bottom: 1px solid black;
padding-bottom: 1em;
height: 20px;
`

const BtnCont = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: space-around;
width: 100%;
padding: 10px;

`

const Form = styled.form`

`

const Spacing = styled.div` 
padding: 15px;
`
const Button = styled.button`
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


class Task extends Component {
    constructor() {
        super()
        this.state = {
            edit: false,
            id: null,
            task: '',
            item: '',
            color: '',
            show: '',
            completed: false
        }
    }


    toggleEdit() {
        this.setState({ 
            edit: true,
            id: this.props.id,
            task: this.props.task,
            item: this.props.item,
            color: this.props.color,
            show: this.props.show

        })
    }

    handleDelete = async () => {
        const id = this.props.id;
        axios.delete(`/auth/task/${id}`).then(res => this.props.deleteTask(res.data));
        await axios.get('auth/tasks').then(res => { 
            this.props.readTasks(res.data)})

    }
    
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async () => {
        console.log(this.props, "props in task")
        const { id, task, item, color, show, completed } = this.state;
        axios.put(`/auth/item/${id}`, {item, color}).then(res => this.props.editTask(res.data));
        axios.put(`/auth/task/${id}`, {task, completed}).then(res => this.props.editTask(res.data));
        axios.put(`/auth/show/${id}`, {show}).then(res => this.props.editTask(res.data));
        await axios.get('/auth/tasks').then(res => { 
            this.props.readTasks(res.data)})
        
        this.setState({
            edit: false
        })
    }




    render() {
        console.log(this.props.id)
        console.log(this.state)
        return (
            <div>
                    
            { !this.state.edit ? 
            <TaskCard>
                <div><h5>{this.props.id}</h5>
                    <Name>Name: {this.props.first} {this.props.last}</Name> <br />
                    <Spacing>
                        Task: {this.props.task} <br />
                        Item: {this.props.item} <br />
                        Color: {this.props.color} <br />
                        Show: {this.props.show} <br />
                    </Spacing>
                </div>
                <BtnCont>
                    <Button onClick={() => this.toggleEdit()}>Edit</Button>
                    <Button onClick={() => this.handleDelete()}>Delete</Button>
                </BtnCont>
            </TaskCard>

            :

            <Form onSubmit={this.onSubmit}>
                <Name>Name: {this.props.first} {this.props.last}</Name> <br />
                <Spacing>
                    Task: <input name='task' value={this.state.task} onChange={this.handleChange} type='text' /> <br />
                    Item: <input name='item' value={this.state.item} onChange={this.handleChange} type='text' /> <br />
                    Color: <input name='color' value={this.state.color} onChange={this.handleChange} type='text' /> <br />
                    Show: <input name='show' value={this.state.show} onChange={this.handleChange} type='text' /> <br />
                </Spacing>
                <BtnCont>
                    <Button onClick={() => this.onSubmit}>Update</Button>
                </BtnCont>
            </Form>
        }
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(
    mapStateToProps,
    { editTask, readTasks, deleteTask }
)(Task)