const Todo = require('./todo.js')

function todoManagement() {
  let todos = []
 function addTodo(desc) {
    const newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id

  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }

  
  function getNumberOfDone() {
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done) {
        count++
      }
    }
    return count
  }
  

  function getNumberOfNotDone() {
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].done) {
        count++
      }
    }
    return count
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }
}
module.exports = todoManagement
