let uno = document.getElementById('uno')

let dos = document.getElementById('dos')
let tres = document.getElementById('tres')
let cuatro = document.getElementById('cuatro')
let cinco = document.getElementById('cinco')
let seis = document.getElementById('seis')
let siete = document.getElementById('siete')
let ocho = document.getElementById('ocho')
let nueve = document.getElementById('nueve')

const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
console.log(audio1)




var currentSong = null;
var songs = [
  "./always-bonjovi.mp3",
  "./always-bonjovi.mp3",
  "ruta/a/cancion3.mp3",
  "ruta/a/cancion4.mp3",
  "ruta/a/cancion5.mp3",
  "ruta/a/cancion6.mp3",
  "ruta/a/cancion7.mp3",
  "ruta/a/cancion8.mp3",
  "ruta/a/cancion9.mp3"
];
    
function playSong(songIndex) {
    var audio = document.getElementById("myAudio");
    if (currentSong != null) {
      currentSong.pause();
    }
    audio.src = songs[songIndex-1];
    audio.play();
    currentSong = audio;
  }