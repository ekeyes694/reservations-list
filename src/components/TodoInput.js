import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../redux/actions';

class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      guestInput: '',
      timeInput: '',
      partyInput: '',
      pagerInput: '',
      waitTimeInput: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const { guestInput, timeInput, partyInput, pagerInput, waitTimeInput } = this.state;

    this.props.todoAction.addTodo({
      guestInput, 
      timeInput, 
      partyInput, 
      pagerInput,
      waitTimeInput
    });

    this.setState({
      guestInput: '',
      timeInput: '',
      partyInput: '',
      pagerInput: '',
      waitTimeInput: ''
    })
  }

  enterGuest(e) {
    this.setState({guestInput: e.target.value})
  }

  enterReservation(e) {
    this.setState({timeInput: e.target.value})
  }
  enterParty(e) {
    this.setState({partyInput: e.target.value})
  }
  enterPager(e) {
    this.setState({pagerInput: e.target.value})
  }
  enterWaitTime(e) {
      this.setState({waitTimeInput: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>Reservation List</h1>
        <hr />
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' placeholder="Name" value={this.state.guestInput} onChange={e => this.enterGuest(e)} />
          <input type='time' placeholder="Reservation Time" value={this.state.timeInput} onChange={e => this.enterReservation(e)} />
          <input type='number' placeholder="Number in Party" value={this.state.partyInput} onChange={e => this.enterParty(e)} />
          <input type='number' placeholder="Pager Number" value={this.state.pagerInput} onChange={e => this.enterPager(e)} />
          <input type='number' placeholder="Wait Time(minutes)" value={this.state.waitTimeInput} onChange={e => this.enterWaitTime(e)} />
          <input type='submit' text='Submit' />
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({ todoAction: bindActionCreators(actions, dispatch)});

export default connect(null, mapDispatch)(TodoInput);