// alert("hi");
// const title = document.getElementById("title")
const title = document.querySelector("div.hello:first-child h1");
let title_clicked = 0;

// console.dir(title)

// const hellos = document.getElementByCLass

function handleTitleClick() {
    console.log("title was clicked!");
}

function titleClicked() {
    console.log("title was clicked!");
    title_clicked += 1
    if(title_clicked % 2 == 1) {
        title.style.color = "purple"
    } else {
        title.style.color = "blue"
    }
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

title.addEventListener("click", titleClicked);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);