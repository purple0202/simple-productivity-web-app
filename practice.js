// alert("hi");
// const title = document.getElementById("title")
const title = document.querySelector("div.hello:first-child h1");
let title_clicked = 0;

// console.dir(title)

// const hellos = document.getElementByCLass

function handleTitleClick() {
    const clickedClass = "active";
    title.classList.toggle(clickedClass);
}

function titleClicked() {
    console.log("title was clicked!");
    title_clicked += 1
    if(title_clicked % 2 == 1) {
        title.style.color = "purple";
        console.log(title.style.color);
    } else {
        title.style.color = "blue"
        console.log(title.style.color);
    }
}

function diffTitleClicked() {
    const currentCol = title.style.color;
    let newCol;
    if(currentCol == "blue") {
        newCol = "purple";
    } else { 
        newCol = "blue";
    }
    title.style.color = newCol;
}

function handleMouseEnter() {
    console.log("mouse is here!");
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "beige";
}

function handleWindowCopy() {
    alert("FUCK YOU");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);