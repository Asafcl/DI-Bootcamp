const drumSounds = {
	kick: './sounds/kick.wav',
	snare: './sounds/snare.wav',
	hiHat: './sounds/hihat.wav'
};


// option A
// Add event listeners to each button
// const kickBtn = document.querySelector('.kick');
// kickBtn.addEventListener('click', () => {
// 	const kickSound = new Audio(drumSounds.kick);
// 	kickSound.play();
// });

// const snareBtn = document.querySelector('.snare');
// snareBtn.addEventListener('click', () => {
// 	const snareSound = new Audio(drumSounds.snare);
// 	snareSound.play();
// });

// const hiHatBtn = document.querySelector('.hi-hat');
// hiHatBtn.addEventListener('click', () => {
// 	const hiHatSound = new Audio(drumSounds.hiHat);
// 	hiHatSound.play();
    
// });

// document.addEventListener('keydown', (event) =>{
//     if(event.code === 'keyA') {
//         const kickSound = new Audio(drumSounds.kick)
//         kickSound.play()
//     } else if(event.code === 'keyS') {
//         const snareSound = new Audio(drumSounds.snare)
//         snareSound.play()
//     }else if(event.code === 'keyD') {
//         const hihatSound = new Audio(drumSounds.hiHat)
//         hihatSound.play()
//     }//revisar por q no me sirvio
// });
// document.addEventListener('keydown', (event) => {
//     if (event.code === 'KeyA') {
//         const kickSound = new Audio(drumSounds.kick);
//         kickSound.play();
//     } else if (event.code === 'KeyS') {
//         const snareSound = new Audio(drumSounds.snare);
//         snareSound.play();
//     } else if (event.code === 'KeyD') {
//         const hiHatSound = new Audio(drumSounds.hiHat);
//         hiHatSound.play();
//     }
//     });

// option B
    const kickBtn = document.querySelector('.kick');
kickBtn.addEventListener('click', () => {
	playSound(drumSounds.kick)
	
});

const snareBtn = document.querySelector('.snare');
snareBtn.addEventListener('click', () => {
	playSound(drumSounds.snare)
});

const hiHatBtn = document.querySelector('.hi-hat');
hiHatBtn.addEventListener('click', () => {
	playSound(drumSounds.hiHat)
    
});

document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyA') {
            playSound(drumSounds.kick)
        } else if (event.code === 'KeyS') {
            playSound(drumSounds.snare)
        } else if (event.code === 'KeyD') {
            playSound(drumSounds.hiHat)
        }
        });

function playSound(sound){
    const audio = new Audio(sound)
    audio.play()
}