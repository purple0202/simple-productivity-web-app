// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

let username;

function handleButtonClicked() {
    // console.dir(loginInput);
    const username = loginInput.value;
    console.log("hello", loginInput.value);
    console.log("clicked!");
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 20) {
        alert("Username is too long!");
    }
    
}

function onLoginSubmit(randarg) {
    randarg.preventDefault();
    // const username = loginInput.value;
    // username = loginInput.value;
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    console.log(username);
    console.log(randarg);
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden")
}

function whenLinkClicked(arg) {
    console.log(arg);
    arg.preventDefault();
    alert("clicked!");
    // arg.preventDefault();
}

console.log(username);
// loginButton.addEventListener("click", handleButtonClicked);
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",whenLinkClicked);