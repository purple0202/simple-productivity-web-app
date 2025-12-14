const images = ['0.png', '1.png', '2.jpg', '3.jpg']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const selectedImage = images[getRandomInt(images.length)];

const bgImage = document.createElement("img");

console.log(selectedImage);
bgImage.src=`img/${selectedImage}`;
document.body.style.backgroundImage = `url(img/${selectedImage})`
document.body.style.backgroundSize = 'cover';
console.log(bgImage);
// document.body.appendChild(bgImage);