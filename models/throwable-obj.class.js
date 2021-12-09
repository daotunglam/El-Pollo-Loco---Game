class ThrowableObj extends MovableObj {



    width = 40;
    height = 40;
    speedX = 20;
    speedY = 10;

    world;

    bottleBreak_sound = new Audio('sounds/bottleBreak.mp3')

    stackOf_TROW = [
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 6.png',
    ]

    stackOf_BREAK = [
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ]


    constructor(x, y) {
        super();
        super.loadImg('img/6.botella/1.Marcador.png');
        super.loadImgs(this.stackOf_TROW);
        super.loadImgs(this.stackOf_BREAK)
        this.x = x;
        this.y = y;
        this.trow();
    }

    trow() {
        super.applyGravity(this.stackOf_TROW);

        setInterval(() => {
            if (this.world.character.otherDirection == false) {
                super.moveRight();
            }
            else {
                super.moveLeft();
            }

            super.animate(this.stackOf_TROW)

            if (!super.isAboveGround() && this.y < 480) {
                this.break();
            }
        }, 1000 / 10);

    }

    break() {
        this.bottleBreak_sound.play();
        super.animate(this.stackOf_BREAK);
        this.speedX = 0;
        super.disappear();
    }



}