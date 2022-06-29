// define objects
let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle")
let container = document.getElementById("game-container")
let score = 0
let gameOver = false

// define function to add jump key frame to character with addeventlistener

document.addEventListener("click", jump)

function jump() {
    character.classList.add("animate")
    setTimeout(function () {
        character.classList.remove("animate");
    }, 1000);
}

// fuction checkCollision(character, obstacle){
//     if (
//         character.x + character.width >= obstacle.x &&
//         character.x <= obstacle.x + obstacle.width &&
//         character.y + character.height >= obstacle.y &&
//         character.y <= obstacle.y + obstacle.height
//     ) {
//         obstacle.style.animation = "none"
//         alert("you lose")
//     };
// }; failed attempt at x,y collision

// let scoreCheck = setInterval(function () {
//     let characterTop =
//         parseInt(window.getComputedStyle(character).getPropertyValue("top"))
//     let objectLeft =
//         parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
//     ;

// }, 10);

let checkCollision = setInterval(function () {
    document.getElementById('score').innerHTML = "Score: " + score;
    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    let objectLeft =
        parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (objectLeft < 30 && objectLeft > 0 && characterTop >= 410) {
        obstacle.style.animation = "none"
        document.getElementById("h1").style.color = "blue";
    } if (objectLeft < 30 && objectLeft > 0 && characterTop <= 410) {
        score++;
    };

}, 10);
