import 'babel-polyfill';
import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import ToDoList from './components/ToDoList';
import UserInfo from './components/UserInfo';
import actions from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h1>User</h1>
        <hr />
        <UserInfo user={this.props.user} createNewUserId={this.props.actions.createNewUserId}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <ToDoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)