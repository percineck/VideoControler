let video = document.getElementById("video1");

let controle = document.getElementById("controles")

function diminuir_vel() {
    video.playbackRate -= 10;
}

function aumentar_vel() {
    video.playbackRate += 10;
}

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function fullScren() {
    video.requestFullscreen();
}

function desaparecerControle() {
    controle.style.display = "block"
}

function aparecerControle() {
    controle.style.display = "none"
}