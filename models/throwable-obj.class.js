class ThrowableObj extends MovableObj {



    width = 50;
    height = 50;
    speedX = 20;
    speedY = 10;

    world;

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
            this.break();
        }, 1000 / 10);

    }

    break() {
        if (!super.isAboveGround()) {
            super.animate(this.stackOf_BREAK)
            this.speedX = 0;
            setTimeout(() => {
                this.y = 480;
            //     let index = this.world.throwableObjs.indexOf(this)
            //     this.world.throwableObjs.splice(index, 1)
            }, 1000/10);
        }
    }



}