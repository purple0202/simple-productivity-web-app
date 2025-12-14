const todo = document.querySelector("#todo-form");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector("#todo-list");
let toDos = [];
// const HIDDEN_CLASSNAME = "hidden"

// if (savedUsername != null){
//     showTodo();
//     todo.classList.remove(HIDDEN_CLASSNAME);
//     todo.addEventListener("submit", addTodo);
//     // todo.addEventListener("submit", showTodo);
// }

function addTodo_myself(event) {
    // const todo = document.createElement("h2");
    event.preventDefault();
    const itemCount = localStorage.length;
    localStorage.setItem(`todo${itemCount}`, todoInput.value);
    const todo = document.createElement("h2");
    console.log(localStorage.getItem(`todo${itemCount}`))
    todo.innerText = localStorage.getItem(`todo${itemCount}`);
    document.body.appendChild(todo);
}

function showTodo() {
    updateTodoVisibility();
    for(let i = 0; i<localStorage.length; i++){
        const todo = document.createElement("h2");
        console.log(localStorage.getItem(`todo${i}`))
        todo.innerText = localStorage.getItem(`todo${i}`);
        document.body.appendChild(todo);
    }
}


function deleteTodo(event){
    updateTodoVisibility();
    const deleted = event.target.parentNode.id;
    todoList.removeChild(event.target.parentNode);
    toDos = toDos.filter((item) => item.id !== parseInt(deleted));
    saveToDos();
}

function paintToDo(newTodo){
    // console.log("i will paint", newTodo);
    updateTodoVisibility();
    const li = document.createElement("li");
    li.classList.add("todo-item");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList.add("delete-btn");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    console.log(li);
    todoList.appendChild(li);

}

function updateTodoVisibility() {
    if (toDos.length === 0) {
      todoList.classList.add("hidden");
    } else {
      todoList.classList.remove("hidden");
    }
  }

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    updateTodoVisibility();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    todoInput.value = "";
    paintToDo(newTodoObj);
    saveToDos();
}

updateTodoVisibility();
todo.addEventListener("submit", handleToDoSubmit);

const savedItems = localStorage.getItem("todos");

if(savedItems !== null){
    const parsedToDos = JSON.parse(savedItems);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
