import * as actions from '../actions';

function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let todoReducer = function(todos = [], action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return [{
          name: action.name,
          time: action.time,
          party: action.party,
          pager: action.pager,
          completed: false,
          id: getId(todos)
        }, ...todos]
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id
      })
    default: 
      return todos;
  }
}

export default todoReducer;