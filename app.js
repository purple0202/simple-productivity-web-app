alert("hi");
// const title = document.getElementById("title")
const title = document.querySelector("div.hello:first-child h1");

// console.dir(title)

// const hellos = document.getElementByCLass

function handleTitleClick() {
    console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
