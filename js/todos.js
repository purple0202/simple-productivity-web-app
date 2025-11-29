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
    for(let i = 0; i<localStorage.length; i++){
        const todo = document.createElement("h2");
        console.log(localStorage.getItem(`todo${i}`))
        todo.innerText = localStorage.getItem(`todo${i}`);
        document.body.appendChild(todo);
    }
}

function deleteTodo(event){
    console.log(event.target.parentNode.innerText);
    todoList.removeChild(event.target.parentNode);
}

function paintToDo(newTodo){
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    console.log(li);
    todoList.appendChild(li);

}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
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
    paintToDo(newTodo);
    saveToDos();
}

todo.addEventListener("submit", handleToDoSubmit);

const savedItems = localStorage.getItem("todos");

if(savedItems !== null){
    const parsedToDos = JSON.parse(savedItems);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
