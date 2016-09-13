import React, { Component } from 'react';
import actions from '../redux/actions';

class TodoItem extends Component {
    
 handleDelete () {
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    render() {
        return (
        <div>    
          
               Party Name: {this.props.todo.name}<br />
                Reservation: {this.props.todo.time}<br />
                Number in Party: {this.props.todo.party}<br />
                Pager Number: {this.props.todo.pager}<br />
            
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
        
          </div>
        );
    }
}

export default TodoItem;