let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    canvas.width = 720;
    canvas.height = 480;

    world = new World(canvas, keyboard);
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