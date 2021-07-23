let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;

let playerOne;
let playerTwo;


let pOneLeft, pOneRight, pOneTop, pOneBottom;
let pTwoLeft, pTwoRight, pTwoTop, pTwoBottom;
let eLeft, eRight, eTop, eBottom;


let gameState = 0;

function setup() {
    createCanvas(500, 500);
    background(220);

    xSpeed = 6;
    ySpeed = 6;

    

    playerOne = new bouncer(210, 465, 90, 12, 6);
    playerTwo = new bouncer(210, 35, 90, 12, 6);

    
}


function draw() {
    background(220);
    
    fill(0,255,255);
    
    rect(xPos, yPos, 20, 20);

    if (gameState == 0) { // Up or Down Direction
        yPos += ySpeed * yDirection;
    } else { // gameState changes from 0 to 1 when the ball is hit by a player.
        xPos += xSpeed * xDirection;
        yPos += ySpeed * yDirection;
    }

    if (xPos < 5 || xPos > 495){
        xDirection *= -1;
    }

    fill(0);
    rect(playerOne.xPos, playerOne.yPos, playerOne.size1, playerOne.size2);
    rect(playerTwo.xPos, playerTwo.yPos, playerTwo.size1, playerTwo.size2);

    if (keyIsDown(LEFT_ARROW)) { // Left Arrow Key
        playerOne.xPos -= playerOne.userSpeed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // RIght Arrow Key
        playerOne.xPos += playerOne.userSpeed;
    }

    if (keyIsDown(83)) { // S Key
        playerTwo.xPos -= playerTwo.userSpeed;
    }

    if (keyIsDown(68)) { // D Key
        playerTwo.xPos += playerTwo.userSpeed;
    }

    // Collision detection

    let collisionRange = 15;

    pOneLeft = playerOne.xPos - collisionRange;
    pOneRight = playerOne.xPos + collisionRange;
    pOneTop = playerOne.yPos - collisionRange;
    pOneBottom = playerOne.yPos + collisionRange;

    pTwoLeft = playerTwo.xPos - collisionRange;
    pTwoRight = playerTwo.xPos + collisionRange;
    pTwoTop = playerTwo.yPos - collisionRange;
    pTwoBottom = playerTwo.yPos + collisionRange;
    
    eLeft = xPos - collisionRange;
    eRight = xPos + collisionRange;
    eTop = yPos - collisionRange;
    eBottom = yPos + collisionRange;

    if (pOneLeft > eRight || pOneRight < eLeft || pOneTop > eBottom || pOneBottom < eTop) {
        
    } else {
        console.log(eLeft, pOneLeft);
        console.log(eRight, pOneRight);
        ySpeed *= -1;
        gameState = 1;
    }

    if (pTwoLeft > eRight || pTwoRight < eLeft || pTwoTop > eBottom || pTwoBottom < eTop) {

    } else {
        ySpeed *= -1;
        gameState = 1;
    }
    
}



class bouncer {
    constructor(x, y, a, b, speed) {
        this.xPos = x;
        this.yPos = y;
        this.size1 = a;
        this.size2 = b;
        this.userSpeed = speed;
    }
}
