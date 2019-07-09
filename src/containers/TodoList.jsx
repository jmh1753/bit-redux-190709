import { connect } from 'react-redux'
import React, {Component} from 'react'
import Todo from '../components/Todo.jsx'
import { toggleTodo } from '../actions/index.jsx'

class TodoList extends Component{
    render(){
        const todoTag = this.props.list.map(
            (todo, index) => <Todo key={index} {...todo} 
            onClick={
                ()=> this.checkTodo(index)
            }/>
        )
        return(
            <ul>
                {todoTag}
            </ul>
        )
    }

    checkTodo=(index)=>{
        this.props.dispatch(toggleTodo(index))
    }
  

}

const mapStateToProps = (state) =>{
    return state.todo        
}

export default connect(mapStateToProps)(TodoList)