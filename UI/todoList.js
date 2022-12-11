function todoUserInterface() {
//   ให้เพิ่มฟังก์ชันที่ชื่อ showTodoItem(newId, newDescription) โดยทำการรับค่า todo 
//  id และ description เป็นพารามิเตอร์ เพื่อทำการแสดงรายการ todo ภายใต้
// ```
// <div id="listTodo"></div>
// ```
// ของเอกสาร HTML โดยแต่ละรายการ todo ให้มีโครงสร้าง tags เรียงลำดับ ดังนี้
// ```
//   <div class="todoItem" id="newId">
// 	  <p>newDescription</p>
// 	  <button>Not Done</button>
// 	  <button>remove</button>
//   </div>
// ```
  function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById('listTodo')
    const div = document.createElement('div')
    div.className = 'todoItem'
    div.id = newId
    const p = document.createElement('p')
    p.innerText = newDescription
    const button1 = document.createElement('button')
    button1.innerText = 'Not Done'
    const button2 = document.createElement('button')
    button2.innerText = 'remove'
    div.appendChild(p)
    div.appendChild(button1)
    div.appendChild(button2)
    listTodo.appendChild(div)
  }

//   ให้เพิ่มฟังก์ชัน showNumberOfDone(numberOfDone) เพื่อแสดงเลขจำนวนของ 
//    Todo ที่อยู่ในสถานะ Done ต่อท้ายข้อความ ภายใน
// ```
// <p id="done">Number of Done: </p>
// ```
  function showNumberOfDone(numberOfDone) {
    const done = document.getElementById('done')
    done.innerText = `Number of Done: ${numberOfDone}`
  }

//   ให้เพิ่มฟังก์ชัน showNumberOfNotDone(numberOfNotDone) เพื่อแสดงเลขจำนวนของ 
//  Todo ที่อยู่ในสถานะ Not Done ต่อท้ายข้อความ ภายใน
// ```
// <p id="notDone">Number of Not Done:</p>
// ```
  function showNumberOfNotDone(numberOfNotDone) {
    const notDone = document.getElementById('notDone')
    notDone.innerText = `Number of Not Done: ${numberOfNotDone}`
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
module.exports = todoUserInterface
