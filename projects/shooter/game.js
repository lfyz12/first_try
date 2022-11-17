let canvas = document.getElementById('myCanvas');
let pic = canvas.getContext('2d');
const ground = new Image();
ground.src = 'image/game.png';
const food = new Image();
food.src = 'image/apple.png';
let box = 32;
let score = 0;
let snakeX = canvas.width/2,
    snakeY = canvas.height/2,
    snakeWidth = 20,
    snakeHeight = 20;
// let color = doColor();
let dX = 2,
    dY = 2;
let rightPressed = false,
    leftPressed = false,
    upPressed = false,
    downPressed = false;
let smallAppleX = 50,
    smallAppleY = 70,
    smallAppleWidth = 8,
    smallAppleHeight = 8,
    arr = [];

// for (let i = 0; i < 10; i++) {
//     arr[i] = [];
//     for (let d = 0; d < 10; d++) {
//         arr[i][d] = {x: 0, y: 0, status: 1};
//     } 
// }

function drawGroond() {
    pic.drawImage(ground, 0, 0);
}
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    } else if (e.keyCode == 38) {
        downPressed = true;
    } else if (e.keyCode == 40) {
        upPressed = true;
    }
}


function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    } else if (e.keyCode == 38) {
        downPressed = false;
    } else if (e.keyCode == 40) {
        upPressed = false;
    }
}



function drawSnake() {
    pic.beginPath();
    pic.rect(snakeX, snakeY, snakeWidth, snakeHeight);
    pic.fillStyle = doColor();
    pic.fill();
    pic.closePath();
}

function doColor() {
    for (let w = 0; w < snakeWidth; w++) {
        for (let h = 0; h < snakeHeight; h++) {
            if (w > 3 && w < 6 && h > 3 && h < 6) {
                pic.fillStyle = 'blue';
                pic.fill();
            } else {
                pic.fillStyle = 'red';
                pic.fill();
            }
        }
    }
}

function drawSmallApple() {
    pic.drawImage(food, smallAppleX, smallAppleY);
}

function collisionDetection() {
    for (let i = 0; i < 10; i++) {
        for (let d = 0; d < 10; d++) {
            let a = arr[i][d];
            smallAppleX = Math.random() * 1024;
            smallAppleY = Math.random() * 720;
            if (a.status == 1) {
                a.x = smallAppleX;
                a.y = smallAppleY;
                if (snakeX > smallAppleX && snakeX < smallAppleX + smallAppleWidth && 
                snakeY > smallAppleY && snakeY < smallAppleY + smallAppleHeight) {
                    a.status = 0;
                    snakeWidth += 20;
                    snakeHeight += 20;
                }
            }
        }
    }
}

function move() {
    pic.clearRect(0, 0, canvas.width, canvas.height);
    drawGroond();
    drawSnake();
    drawSmallApple();
    // collisionDetection();


    if (rightPressed) {
        snakeX += dX;  
    } else if (leftPressed) {
        snakeX -= dX;
    } else if (upPressed) {
        snakeY += dY;
    } else if (downPressed) {
        snakeY -= dY;
    }

    if (snakeX > smallAppleX && snakeX < smallAppleX + smallAppleWidth && 
    snakeY > smallAppleY && snakeY < smallAppleY + smallAppleHeight) {
        smallAppleX = Math.random() * 1024;
        smallAppleY = Math.random() * 720;
        snakeWidth += 20;
        snakeHeight += 2;
    }

}

move();
setInterval(move, 20);