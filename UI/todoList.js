function todoUserInterface() {

  function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById('listTodo')
    const div = document.createElement('div')
    div.className = 'todoItem'
    div.id = newId
    const p = document.createElement('p')
    p.textContent = newDescription
    const button1 = document.createElement('button')
    button1.textContent = 'Not Done'
    const button2 = document.createElement('button')
    button2.textContent = 'remove'
    div.appendChild(p)
    div.appendChild(button1)
    div.appendChild(button2)
    listTodo.appendChild(div)
  }


  function showNumberOfDone(numberOfDone) {
    const done = document.getElementById('done')
    done.textContent = `Number of Done:${numberOfDone}`
  }

  function showNumberOfNotDone(numberOfNotDone) {
    const notDone = document.getElementById('notDone')
    notDone.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
module.exports = todoUserInterface
