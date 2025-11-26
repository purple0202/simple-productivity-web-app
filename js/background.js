const images = ['0.jpeg', '1.jpeg', '2.jpeg']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const selectedImage = images[getRandomInt(images.length)];

const bgImage = document.createElement("img");

console.log(selectedImage);
bgImage.src=`img/${selectedImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);