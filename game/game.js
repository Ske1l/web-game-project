// define objects
let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle")

// define function to add jump key frame to character with addeventlistener

document.addEventListener("click", jump)

function jump() {
    character.classList.add("animate")
    setTimeout(function () {
        character.classList.remove("animate");
    }, 1000)
}