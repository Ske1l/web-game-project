// define objects
let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle")

// define function to add jump key frame to character with addeventlistener

document.addEventListener("click", jump)

function jump() {
    character.classList.add("animate")
    setTimeout(function () {
        character.classList.remove("animate");
    }, 1000);
}

fuction checkCollision(character, obstacle){
    if (
        character.x + character.width >= obstacle.x &&
        character.x <= obstacle.x + obstacle.width &&
        character.y + character.height >= obstacle.y &&
        character.y <= obstacle.y + obstacle.height
    ) {
        obstacle.style.animation = "none"
        alert("you lose")
    };
};

// let checkCollision = setInterval(function () {
//     let characterTop =
//         parseInt(window.getComputedStyle(character).getPropertyValue("top"))
//     let objectLeft =
//         parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
//     if (objectLeft < 30 && objectLeft > 0 && characterTop >= 410) {
//         obstacle.style.animation = "none"
//         alert("u lose")
//     }
// }, 10);