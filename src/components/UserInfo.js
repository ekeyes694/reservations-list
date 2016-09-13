import React, { Component } from 'react';

class UserInfo extends Component {
    
    handleNewId () {
    this.props.createNewUserId()
    }
    
    render() {
        return (
            <div>
            <div>Host Name: {this.props.user.username}</div>
            <div>Pager: {this.props.user.id}</div>
            <button onClick={this.handleNewId.bind(this)}>Generate Pager</button>
            </div>
        );
    }
    
}

export default UserInfo;