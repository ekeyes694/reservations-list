import React, { Component } from 'react';
import actions from '../redux/actions';

    var CountdownTimer = React.createClass({
  getInitialState: function() {
    return {
      secondsRemaining: 0
    };
  },
  tick: function() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
        document.getElementById('countdown').style.backgroundColor='red';
        document.getElementById('countdown').style.width='200px';
    }
  },
  componentDidMount: function() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  
  render: function() {
    return (
      <div id="countdown">Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  }
    });

class TodoItem extends Component {
 
 handleDelete () {
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    render() {
        return (
        <div>    
          
                Party Name: {this.props.todo.name}<br />
                Reservation: {this.props.todo.time} p.m.<br />
                Number in Party: {this.props.todo.party}<br />
                Pager Number: {this.props.todo.pager}<br />
                Wait Time: {this.props.todo.waitTime} minutes<br /> 
                <CountdownTimer secondsRemaining={this.props.todo.waitTime * 60} /><br />
            
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
        
          </div>
        );
    }
}

export default TodoItem;