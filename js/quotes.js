const quotes = [
    { manga: "Jojo's Bizarre adventure",
        author: "Araki Hirohiko",
    },
    { manga: "idk fuck",
        author: "me",
    },
    { manga: "blue box",
        author:"idk",
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function fillText(obj, content){
    obj.innerText = content;
}

const manga = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = getRandomInt(quotes.length)
const content = quotes[index]
fillText(manga, content.manga);
fillText(author, content.author);
