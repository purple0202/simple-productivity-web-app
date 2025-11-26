const clock = document.querySelector("h2#clock")

function sayHello() {
    console.log("hello!");
}

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const seconds = date.getSeconds().toString().padStart(2,"0")
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${seconds}`
}

// setInterval(sayHello, 3000);
// setTimeout(sayHello, 3000);

getClock();
setInterval(getClock, 1000);