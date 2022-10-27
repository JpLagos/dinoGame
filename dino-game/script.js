const time = new Date()
const deltaTime = 0;

if(document.readyState === 'complete' || document.readyState=== 'interactive'){
    setTimeout(Init, 1);
}
else{
    document.addEventListener('DOMContentLoaded', Init);
}

function Init(){
    time = new Date();
    Start();
    Loop();
}

function Loop() {
    deltaTime = (new Date() - time) / 1000;
    time = new Date()
    Update()
    requestAnimationFrame(Loop)
}

//GAME

const groundY = 22;
const speedY = 0;
const impulse = 900;
const gravity = 2500;

const dinoPosX = 42
const dinoPosY = groundY

const groundX = 0;
const speedScenary = 1280/3;
const gameSpeed = 1;
const score = 0;

const initialStop = false;
const jumping = false;
const container;
const dino;
const textScore;
const ground;
const gameOver;

function Start (){
    gameOver = document.querySelector(".game-over");
    ground = document.querySelector(".ground");
    container = document.querySelector(".container");
    textScore = document.querySelector(".score");
    dino = document.querySelector(".dino");

}

function Update () {
    moveGround();

}

function moveGround(){
    groundX += calculateDisplacement();
    ground.style.left = -(groundX % container.clientWidth) + "px";
}

function calculateDisplacement() {
    return speedScenary * deltaTime * gameSpeed;
}