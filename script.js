<<<<<<< HEAD
const clock = document.querySelector('#disp');
window.addEventListener("load", relogio);

function relogio(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
=======
"use strict"

let clock = document.querySelector('#disp');
window.addEventListener("load", relogio);

function relogio(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
>>>>>>> 81aaa2f49b68bccbaa4f9c2c0a2ed8d4901c82d3

    if (hours < 10) hours=`0${hours}`;
    if (minutes < 10) minutes=`0${minutes}`;
    if (seconds < 10) seconds=`0${seconds}`;
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(relogio, 1000);
