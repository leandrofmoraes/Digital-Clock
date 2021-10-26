/*var h = document.querySelector('#hr').innerHTML;
var m = document.querySelector('#min').innerHTML;
var s = document.querySelector('#sec').innerHTML;*/
var clock = document.querySelector('#disp');
window.addEventListener("load", relogio);

function relogio(){
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    if (hours < 10) hours=`0${hours}`;
    if (minutes < 10) minutes=`0${minutes}`;
    if (seconds < 10) seconds=`0${seconds}`;
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(relogio, 1000);


