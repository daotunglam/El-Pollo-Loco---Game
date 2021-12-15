let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');

    world = new World(canvas, keyboard);
}

function startGame(){
    init();
    world.startGame();
    
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('playScreen').classList.remove('d-none');
}
function pauseGame(){
    world.pauseGame();
    document.getElementById('btnPause').classList.add('d-none');
    document.getElementById('btnResume').classList.remove('d-none');
}
function resumeGame(){
    document.getElementById('btnResume').classList.add('d-none');
    document.getElementById('btnPause').classList.remove('d-none');
}
function restartGame(){
    window.location = 'index.html';
}


window.addEventListener('keydown', (e)=>{
    if(e.key == 'ArrowRight'){
        keyboard.RIGHT = true;
    }
    if(e.key == 'ArrowLeft'){
        keyboard.LEFT = true;
    }
    if(e.key == 'ArrowUp'){
        keyboard.UP = true;
    }
    if(e.key == 'ArrowDown'){
        keyboard.DOWN = true;
    }
    if(e.key == ' '){
        keyboard.SPACE = true;
    }
    if(e.key == 'd'){
        keyboard.D = true;
    }
})

window.addEventListener('keyup', (e)=>{
    if(e.key == 'ArrowRight'){
        keyboard.RIGHT = false;
    }
    if(e.key == 'ArrowLeft'){
        keyboard.LEFT = false;
    }
    if(e.key == 'ArrowUp'){
        keyboard.UP = false;
    }
    if(e.key == 'ArrowDown'){
        keyboard.DOWN = false;
    }
    if(e.key == ' '){
        keyboard.SPACE = false;
    }
    if(e.key == 'd'){
        keyboard.D = false;
    }
})