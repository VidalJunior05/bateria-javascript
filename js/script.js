window.onload = function(){
    let instructions = document.querySelector('.instructions');
    instructions.style.display = 'block';
    document.querySelector('.button-instructions button').addEventListener('click', ()=> {
        instructions.style.display = 'none';
    });
}

document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLocaleLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', () => {
    let typedKeys = document.querySelector('#input').value;
    if(typedKeys !==  ''){
        let typedKeysArray = typedKeys.split('');
        playComposition(typedKeysArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if(audioElement){   
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
}
function playComposition(typedKeysArray){
    let wait = 0;
    for(let songItem of typedKeysArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}

