
var currentSong = null;

const songs = {
  uno: "./sound/ES_Joy in the Little Things - Sayuri Hayashi Egnell.wav",
  dos: "./sound/snare.wav",
  tres: "./sound/clap.wav",
  cuatro: "./sound/hihat.wav",
  cinco: "./sound/boom.wav",
  seis: "./sound/openhat.wav",
  siete: "./sound/ride.wav",
  ocho: "./sound/tink.wav",
  nueve: "./sound/tom.wav"
};

const unoBtn = document.getElementById('uno')
unoBtn.addEventListener('click', () => {
  playSound(songs.uno)
})

const dosBtn = document.getElementById('dos')
dosBtn.addEventListener('click', ()=> {
  playSound(songs.dos)
})
const tresBtn = document.getElementById('tres')
tresBtn.addEventListener('click', () =>{
  playSound(songs.tres)
}) 
const cuatroBtn = document.getElementById('cuatro')
cuatroBtn.addEventListener('click', () => {
  playSound(songs.cuatro)
})
const cincoBtn = document.getElementById('cinco')
cincoBtn.addEventListener('click', () =>{
  playSound(songs.cinco)
})
const seisBtn = document.getElementById('seis')
seisBtn.addEventListener('click', () =>{
  playSound(songs.seis)
})
const sieteBtn = document.getElementById('siete')
sieteBtn.addEventListener('click', ()=>{
  playSound(songs.siete)
  })
  const ochoBtn = document.getElementById('ocho')
ochoBtn.addEventListener('click', ()=>{
  playSound(songs.ocho)
  })
  const nueveBtn = document.getElementById('nueve')
nueveBtn.addEventListener('click', ()=>{
  playSound(songs.nueve)
  })

  document.addEventListener('keydown', (event)=>{
    if(event.code === 'KeyA'){
      playSound(songs.uno)
    }else if(event.code === 'KeyS'){ 
      playSound(songs.dos)
    }else if(event.code === 'KeyD'){
    playSound(songs.tres)
  }else if(event.code === 'KeyF'){
    playSound(songs.cuatro)
  }else if(event.code === 'KeyG'){
    playSound(songs.cinco)
  }else if(event.code === 'KeyH'){
    playSound(songs.seis)
  }else if(event.code === 'KeyJ'){
    playSound(songs.siete)
  }else if(event.code === 'KeyK'){
    playSound(songs.ocho)
  }else if(event.code === 'KeyL'){
    playSound(songs.nueve)
  }else if(event.code === 'KeyM'){
    pauseAll()
  }
  })

  function pauseAll() {
    const sounds = document.querySelectorAll('span');
    sounds.forEach(sound => sound.pause());
  }//revisar para poner pausa a todo

function playSound(sonido) {

    const sound = new Audio(sonido)
    sound.play()
  }