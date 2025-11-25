const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

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

loginButton.addEventListener("click", handleButtonClicked);