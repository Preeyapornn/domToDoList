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

  //ให้เพิ่มฟังก์ชัน getNumberOfDone เพื่อ return จำนวนของ Todo ที่อยู่ในสถานะ Done
  function getNumberOfDone() {
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].isDone) {
        count++
      }
    }
    return count
  }
  //ให้เพิ่มฟังก์ชัน getNumberOfNotDone เพื่อ return จำนวนของ Todo ที่อยู่ในสถานะ Not Done
  function getNumberOfNotDone() {
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].isDone) {
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
