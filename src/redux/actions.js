export const ADD_TODO = 'ADD_TODO';

let actions = {
    addTodo: function (todo) {
        return {
            type: ADD_TODO,
            name: todo.guestInput,
            time: todo.timeInput,
            party: todo.partyInput,
            pager: todo.pagerInput
        }
    },
    completeTodo: function (id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },
    deleteTodo: function (id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },
    createNewUserId: function () {
        return {
            type:'CREATE_USER_ID',
            id: Math.round(Math.random() * 100)
        }
    }
}

export default actions;