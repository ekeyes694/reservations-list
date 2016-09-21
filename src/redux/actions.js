export const ADD_TODO = 'ADD_TODO';

let actions = {
    addTodo: function (todo) {
        return {
            type: ADD_TODO,
            name: todo.guestInput,
            time: todo.timeInput,
            party: todo.partyInput,
            pager: todo.pagerInput,
            waitTime: todo.waitTimeInput
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