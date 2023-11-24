const bg = document.getElementById('main')

function randomColor() {
    return Math.floor(Math.random() * 256)
}

let newColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`

setInterval(() => {
    bg.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    console.log(bg.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
}, 500)