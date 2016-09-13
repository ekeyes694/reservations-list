import React, { Component } from 'react';
import TodoItem from './ToDoItem';


class TodoList extends Component {
    
    render() {
        return (
          <div>
        <ul>
            
                {
                    this.props.todos.map((todo) => {
                        return <li><TodoItem key={todo.id} todo={todo} actions={this.props.actions} /></li>
            
                })
                }
            </ul>
          </div>
        );
    }
}

export default TodoList;