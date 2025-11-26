const todo = document.querySelector("#todo-form");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector("todo-list");
// const HIDDEN_CLASSNAME = "hidden"

if (savedUsername != null){
    showTodo();
    todo.classList.remove(HIDDEN_CLASSNAME);
    todo.addEventListener("submit", addTodo);
    // todo.addEventListener("submit", showTodo);
}

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
