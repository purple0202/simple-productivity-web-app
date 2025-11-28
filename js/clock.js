const clock = document.querySelector("h2#clock")

function sayHello() {
    console.log("hello!");
}

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const hours = date.getHours().toString().padStart(2,"0")
    const minutes = date.getMinutes().toString().padStart(2,"0")
    const seconds = date.getSeconds().toString().padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

// setInterval(sayHello, 3000);
// setTimeout(sayHello, 3000);

getClock();
setInterval(getClock, 1000);